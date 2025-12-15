/**
 * ERPL Hotfire Data Analysis App - JavaScript Implementation
 * Complete port of the Python Tkinter application
 * Fixed: click selection, PNG download, test data, custom plot smoothing, multi-axis, constant lines
 */

// ============================================
// ANALYZER CONTEXT - State Management
// ============================================

class AnalyzerContext {
    constructor() {
        this.df = null;           // Parsed CSV data as array of objects
        this.columns = [];        // Column names
        this.timeCol = null;
        this.thrustCols = [];
        this.chamberCol = null;
        this.fuelCol = null;
        this.oxidizerCol = null;
        this.ofRatio = null;
        this.initialMask = null;
        this.dataMask = null;
        this.metrics = {};
        this.lastTargetThrust = null;
    }

    reset() {
        this.df = null;
        this.columns = [];
        this.timeCol = null;
        this.thrustCols = [];
        this.chamberCol = null;
        this.fuelCol = null;
        this.oxidizerCol = null;
        this.ofRatio = null;
        this.initialMask = null;
        this.dataMask = null;
        this.metrics = {};
        this.lastTargetThrust = null;
    }
}

// Global context
const ctx = new AnalyzerContext();

// Current chart instance
let currentChart = null;
let currentPlotData = null;
let selectedPoints = [];

// Custom plot state
let customPlotConstantLines = [];
let customPlotRawDatasets = [];

// ============================================
// CSV LOADING & PARSING
// ============================================

function loadCSV(input) {
    const file = input.files[0];
    if (!file) return;

    document.getElementById('fileNameDisplay').textContent = 'Loading...';

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (results) {
            if (results.errors.length > 0) {
                toast.error('Error parsing CSV: ' + results.errors[0].message);
                return;
            }

            ctx.df = results.data;
            ctx.columns = results.meta.fields;

            document.getElementById('fileNameDisplay').textContent = `Loaded: ${file.name}`;
            toast.success(`Loaded ${ctx.df.length} rows from ${file.name}`);

            // Try to infer columns
            inferColumns();

            // Show column selection modal if needed
            if (!ctx.timeCol || ctx.thrustCols.length === 0) {
                showColumnSelectionModal();
            } else {
                // Ask for target thrust
                promptForTargetThrust();
            }
        },
        error: function (error) {
            toast.error('Failed to load CSV: ' + error.message);
            document.getElementById('fileNameDisplay').textContent = 'Load failed';
        }
    });
}

function inferColumns() {
    ctx.timeCol = null;
    ctx.thrustCols = [];
    ctx.chamberCol = null;
    ctx.fuelCol = null;
    ctx.oxidizerCol = null;

    for (const col of ctx.columns) {
        const lower = col.toLowerCase();

        // Time column
        if (!ctx.timeCol && (lower === 'time' || lower === 't' || lower.includes('time'))) {
            ctx.timeCol = col;
        }

        // Thrust columns
        if (lower.includes('thrust')) {
            ctx.thrustCols.push(col);
        }

        // Chamber pressure
        if (!ctx.chamberCol && lower.includes('chamber') && lower.includes('press')) {
            ctx.chamberCol = col;
        }

        // Fuel weight
        if (!ctx.fuelCol && lower.includes('fuel') && lower.includes('weight')) {
            ctx.fuelCol = col;
        }

        // Oxidizer weight
        if (!ctx.oxidizerCol && (lower.includes('ox') || lower.includes('oxidizer')) && lower.includes('weight')) {
            ctx.oxidizerCol = col;
        }
    }
}

function showColumnSelectionModal() {
    // Populate dropdowns
    const timeSelect = document.getElementById('timeColumnSelect');
    const chamberSelect = document.getElementById('chamberColumnSelect');
    const fuelSelect = document.getElementById('fuelColumnSelect');
    const oxidizerSelect = document.getElementById('oxidizerColumnSelect');
    const thrustContainer = document.getElementById('thrustColumnsContainer');

    // Clear and populate
    [timeSelect, chamberSelect, fuelSelect, oxidizerSelect].forEach(select => {
        select.innerHTML = '<option value="">-- Select --</option>';
        ctx.columns.forEach(col => {
            const option = document.createElement('option');
            option.value = col;
            option.textContent = col;
            select.appendChild(option);
        });
    });

    // Set inferred values
    if (ctx.timeCol) timeSelect.value = ctx.timeCol;
    if (ctx.chamberCol) chamberSelect.value = ctx.chamberCol;
    if (ctx.fuelCol) fuelSelect.value = ctx.fuelCol;
    if (ctx.oxidizerCol) oxidizerSelect.value = ctx.oxidizerCol;

    // Thrust checkboxes
    thrustContainer.innerHTML = '';
    ctx.columns.forEach(col => {
        const div = document.createElement('div');
        div.className = 'checkbox-wrapper';
        div.innerHTML = `
      <input type="checkbox" class="checkbox-input thrust-checkbox" value="${col}" 
             ${ctx.thrustCols.includes(col) ? 'checked' : ''}>
      <label>${col}</label>
    `;
        thrustContainer.appendChild(div);
    });

    ModalManager.open('columnSelectionModal');
}

function confirmColumnSelection() {
    ctx.timeCol = document.getElementById('timeColumnSelect').value;
    ctx.chamberCol = document.getElementById('chamberColumnSelect').value;
    ctx.fuelCol = document.getElementById('fuelColumnSelect').value;
    ctx.oxidizerCol = document.getElementById('oxidizerColumnSelect').value;

    ctx.thrustCols = [];
    document.querySelectorAll('.thrust-checkbox:checked').forEach(cb => {
        ctx.thrustCols.push(cb.value);
    });

    if (!ctx.timeCol || ctx.thrustCols.length === 0) {
        toast.warning('Please select at least Time and one Thrust column');
        return;
    }

    ModalManager.close('columnSelectionModal');
    promptForTargetThrust();
}

async function promptForTargetThrust() {
    const targetThrust = await PromptDialog.show(
        'Target Thrust',
        'Enter expected target thrust (lbf):',
        ''
    );

    if (targetThrust === null) return;

    ctx.lastTargetThrust = targetThrust;
    computeMetrics(targetThrust);
    displayMetrics();
}

// ============================================
// METRICS COMPUTATION
// ============================================

function computeMetrics(targetThrust) {
    if (!ctx.df || !ctx.timeCol || ctx.thrustCols.length === 0) {
        ctx.metrics = { Error: 'Missing data' };
        return;
    }

    const time = getColumnData(ctx.timeCol);
    const thrustTotal = getTotalThrust();

    // Check for custom splice
    const useCustomSplice = document.getElementById('customSpliceCheckbox')?.checked;
    let mask;

    if (useCustomSplice) {
        const tStart = parseFloat(document.getElementById('startTimeInput').value);
        const tEnd = parseFloat(document.getElementById('endTimeInput').value);

        if (isNaN(tStart) || isNaN(tEnd)) {
            ctx.metrics = { Error: 'Invalid custom splice time range.' };
            ctx.dataMask = new Array(ctx.df.length).fill(true);
            return;
        }

        mask = time.map((t, i) => t >= tStart && t <= tEnd);
    } else {
        // Thrust-based masking
        const lower = 0.5 * targetThrust;
        const upper = 1.5 * targetThrust;
        mask = thrustTotal.map(t => t >= lower && t <= upper);
    }

    const anyValid = mask.some(v => v);
    if (!anyValid) {
        ctx.metrics = { Error: 'No data in selected window.' };
        ctx.dataMask = new Array(ctx.df.length).fill(true);
        return;
    }

    ctx.initialMask = [...mask];
    ctx.dataMask = mask;

    // Calculate metrics
    const [filteredTime, filteredThrust] = Utils.applyMask(mask, time, thrustTotal);
    const burnDur = filteredTime[filteredTime.length - 1] - filteredTime[0];
    const totalImpulse = Utils.trapz(filteredThrust, filteredTime);
    const avgThrust = burnDur > 0 ? totalImpulse / burnDur : 0;

    ctx.metrics = {
        'Burn Time (s)': burnDur.toFixed(3),
        'Total Impulse (lbf·s)': totalImpulse.toFixed(2),
        'Average Thrust (lbf)': avgThrust.toFixed(2)
    };

    // Calculate O/F ratio if possible
    if (ctx.fuelCol && ctx.oxidizerCol) {
        const fuelWeight = getColumnData(ctx.fuelCol);
        const oxWeight = getColumnData(ctx.oxidizerCol);
        ctx.ofRatio = oxWeight.map((ox, i) => ox / (fuelWeight[i] + 1e-6));
    }
}

function displayMetrics() {
    const section = document.getElementById('metricsSection');
    const container = document.getElementById('metricsContainer');

    if (Object.keys(ctx.metrics).length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    container.innerHTML = '';

    for (const [key, value] of Object.entries(ctx.metrics)) {
        const card = document.createElement('div');
        card.className = 'metric-card';
        card.innerHTML = `
      <div class="metric-label">${key}</div>
      <div class="metric-value">${value}</div>
    `;
        container.appendChild(card);
    }
}

// ============================================
// DATA HELPERS
// ============================================

function getColumnData(colName) {
    if (!ctx.df || !colName) return [];
    return ctx.df.map(row => Utils.parseNumber(row[colName]));
}

function getTotalThrust() {
    if (ctx.thrustCols.length === 0) return [];
    return ctx.df.map(row => {
        let sum = 0;
        for (const col of ctx.thrustCols) {
            const val = Utils.parseNumber(row[col]);
            if (!isNaN(val)) sum += val;
        }
        return sum;
    });
}

// ============================================
// SLIDER HANDLERS
// ============================================

function updateSliderDisplay(type) {
    if (type === 'downsample') {
        const value = document.getElementById('downsampleSlider').value;
        document.getElementById('downsampleValue').textContent = value;
    }
}

// Global variable to store the actual extra data percentage
let currentExtraDataPercent = 0;

// Exponential slider for extra data percentage
// Slider goes 0-100, but the actual value scales exponentially from 0% to 30%
function updateExtraDataSlider() {
    const sliderValue = parseInt(document.getElementById('extraDataSlider').value);

    // Exponential mapping: 0-100 slider -> 0-30% actual value
    // Using exponential formula: value = (e^(slider/100 * ln(31)) - 1) / 30 * 30
    // Simplified: at slider=0 -> 0%, at slider=100 -> 30%
    // With 0.1% resolution at the low end

    let actualPercent;
    if (sliderValue === 0) {
        actualPercent = 0;
    } else {
        // Exponential scaling: starts slow, increases faster
        // Maps 0-100 to 0-30 with exponential curve
        const t = sliderValue / 100;
        actualPercent = (Math.pow(31, t) - 1) / 30 * 30;

        // Round to 0.1% precision
        actualPercent = Math.round(actualPercent * 10) / 10;
    }

    currentExtraDataPercent = actualPercent;
    document.getElementById('extraDataValue').textContent = actualPercent.toFixed(1) + '%';
}

// Override getFilteredData to use the exponential extra data value
function getFilteredData() {
    const downsample = parseInt(document.getElementById('downsampleSlider').value) || 1;
    const extraPercent = currentExtraDataPercent || 0;

    let mask = ctx.initialMask ? [...ctx.initialMask] : new Array(ctx.df.length).fill(true);

    if (extraPercent > 0) {
        mask = Utils.expandMask(mask, extraPercent);
    }

    ctx.dataMask = mask;

    // Apply mask and downsample
    const filtered = ctx.df.filter((_, i) => mask[i]);
    const downsampled = Utils.downsample(filtered, downsample);

    return downsampled;
}

function toggleCustomSplice() {
    const checked = document.getElementById('customSpliceCheckbox').checked;
    const inputs = document.getElementById('spliceInputs');
    inputs.style.display = checked ? 'flex' : 'none';
}

function applySplice() {
    if (ctx.lastTargetThrust !== null) {
        computeMetrics(ctx.lastTargetThrust);
        displayMetrics();
        toast.success('Custom splice applied');
    }
}

// ============================================
// MODAL HANDLERS
// ============================================

function showInstructions() {
    ModalManager.open('instructionsModal');
}

function closePlotModal() {
    ModalManager.close('plotModal');
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }
    currentPlotData = null;
    selectedPoints = [];
    customPlotRawDatasets = [];
}

// ============================================
// PLOTTING FUNCTIONS - FIXED
// ============================================

async function createPlot(title, xData, yData, xLabel, yLabel, color, config = {}) {
    if (!ctx.df) {
        toast.warning('Please load a CSV file first');
        return;
    }

    // Filter out NaN values for cleaner plotting
    const validIndices = [];
    for (let i = 0; i < xData.length; i++) {
        if (!isNaN(xData[i]) && !isNaN(yData[i])) {
            validIndices.push(i);
        }
    }

    const cleanX = validIndices.map(i => xData[i]);
    const cleanY = validIndices.map(i => yData[i]);

    // Store current plot data with numeric x values
    currentPlotData = {
        title,
        xData: cleanX,
        yData: [...cleanY],
        xLabel,
        yLabel,
        color,
        rawYData: [...cleanY],
        isCustomPlot: false
    };

    selectedPoints = [];

    // Update modal title
    document.getElementById('plotModalTitle').textContent = title;

    // Reset smoothing slider
    document.getElementById('smoothingSlider').value = 1;
    document.getElementById('smoothingValue').textContent = '1';

    // Reset avg display
    document.getElementById('avgDisplay').innerHTML = '<span style="color: var(--text-muted);">Click two points on the chart to calculate average</span>';

    // Open modal
    ModalManager.open('plotModal');

    // Wait for modal to be visible before creating chart
    await new Promise(r => setTimeout(r, 50));

    // Destroy existing chart
    if (currentChart) {
        currentChart.destroy();
    }

    // Create the chart with xy data format for proper click handling
    const canvas = document.getElementById('plotCanvas');
    const ctx2d = canvas.getContext('2d');

    // Prepare data as {x, y} objects for scatter-like line chart
    const xyData = cleanX.map((x, i) => ({ x: x, y: cleanY[i] }));

    currentChart = new Chart(ctx2d, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Raw Data',
                    data: xyData,
                    borderColor: color + '66',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false,
                    tension: 0
                },
                {
                    label: 'Smoothed Data',
                    data: xyData,
                    borderColor: color,
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    tension: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: { color: '#ffffff' }
                },
                title: {
                    display: true,
                    text: title,
                    color: '#ffffff',
                    font: { size: 16 }
                },
                annotation: {
                    annotations: {}
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: xLabel,
                        color: '#b8b8d4'
                    },
                    ticks: { color: '#b8b8d4' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: yLabel,
                        color: '#b8b8d4'
                    },
                    ticks: { color: '#b8b8d4' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            },
            onClick: handleChartClick
        }
    });
}

// FIXED: Click handler with proper coordinate detection
function handleChartClick(event, elements) {
    if (!currentChart || !currentPlotData) return;

    // Get click position relative to chart area
    const rect = currentChart.canvas.getBoundingClientRect();
    const x = event.native.clientX - rect.left;
    const y = event.native.clientY - rect.top;

    // Convert pixel to data value
    const xValue = currentChart.scales.x.getValueForPixel(x);

    // Find closest data point by x value
    const xData = currentPlotData.xData;
    const yData = currentPlotData.yData;

    let closestIdx = 0;
    let minDist = Infinity;

    for (let i = 0; i < xData.length; i++) {
        const dist = Math.abs(xData[i] - xValue);
        if (dist < minDist) {
            minDist = dist;
            closestIdx = i;
        }
    }

    const pointX = xData[closestIdx];
    const pointY = yData[closestIdx];

    // Reset if two points already selected
    if (selectedPoints.length >= 2) {
        selectedPoints = [];
        // Remove annotations
        currentChart.options.plugins.annotation.annotations = {};
    }

    selectedPoints.push({ x: pointX, y: pointY, idx: closestIdx });

    // Add annotation for point
    const pointId = `point${selectedPoints.length}`;
    currentChart.options.plugins.annotation.annotations[pointId] = {
        type: 'point',
        xValue: pointX,
        yValue: pointY,
        backgroundColor: selectedPoints.length === 1 ? 'rgba(0, 255, 0, 0.9)' : 'rgba(255, 0, 0, 0.9)',
        radius: 8,
        borderColor: '#ffffff',
        borderWidth: 2
    };

    // Add vertical line
    const lineId = `line${selectedPoints.length}`;
    currentChart.options.plugins.annotation.annotations[lineId] = {
        type: 'line',
        xMin: pointX,
        xMax: pointX,
        borderColor: selectedPoints.length === 1 ? 'rgba(0, 255, 0, 0.7)' : 'rgba(255, 0, 0, 0.7)',
        borderWidth: 2,
        borderDash: [5, 5]
    };

    // If two points selected, calculate average
    if (selectedPoints.length === 2) {
        const idx1 = Math.min(selectedPoints[0].idx, selectedPoints[1].idx);
        const idx2 = Math.max(selectedPoints[0].idx, selectedPoints[1].idx);

        const slice = yData.slice(idx1, idx2 + 1);
        const avg = Utils.mean(slice);
        const unitMatch = currentPlotData.yLabel.match(/\(([^)]+)\)/);
        const unit = unitMatch ? unitMatch[1] : '';

        document.getElementById('avgDisplay').innerHTML = `
      <span class="chart-avg-value">Average: ${avg.toFixed(3)} ${unit}</span>
      <span style="margin-left: 20px; color: var(--text-muted);">Range: ${selectedPoints[0].x.toFixed(2)}s - ${selectedPoints[1].x.toFixed(2)}s</span>
    `;

        // Add horizontal average line between the two selection points
        const minX = Math.min(selectedPoints[0].x, selectedPoints[1].x);
        const maxX = Math.max(selectedPoints[0].x, selectedPoints[1].x);

        currentChart.options.plugins.annotation.annotations.avgLine = {
            type: 'line',
            yMin: avg,
            yMax: avg,
            xMin: minX,
            xMax: maxX,
            borderColor: 'rgba(255, 165, 0, 0.9)',
            borderWidth: 3,
            label: {
                display: true,
                content: `Avg: ${avg.toFixed(2)} ${unit}`,
                position: 'center',
                backgroundColor: 'rgba(255, 165, 0, 0.9)',
                color: '#000',
                font: { weight: 'bold' }
            }
        };
    }

    currentChart.update();
}

function updateSmoothing() {
    if (!currentChart || !currentPlotData) return;

    const windowSize = parseInt(document.getElementById('smoothingSlider').value);
    document.getElementById('smoothingValue').textContent = windowSize;

    if (currentPlotData.isCustomPlot && customPlotRawDatasets.length > 0) {
        // Custom plot: smooth all datasets
        for (let i = 0; i < customPlotRawDatasets.length; i++) {
            const rawData = customPlotRawDatasets[i];
            const smoothedData = Utils.smooth(rawData, windowSize);

            // Update chart data
            if (currentChart.data.datasets[i]) {
                const xData = currentPlotData.xData;
                currentChart.data.datasets[i].data = xData.map((x, j) => ({ x: x, y: smoothedData[j] }));
            }
        }
    } else {
        // Single plot: smooth the one dataset
        const smoothedData = Utils.smooth(currentPlotData.rawYData, windowSize);
        currentPlotData.yData = smoothedData;

        // Update chart - smoothed dataset is index 1
        const xyData = currentPlotData.xData.map((x, i) => ({ x: x, y: smoothedData[i] }));
        currentChart.data.datasets[1].data = xyData;
    }

    currentChart.update();
}

// FIXED: PNG download with proper file extension - uses data URL for Safari compatibility
function savePlot() {
    if (!currentChart) return;

    const canvas = document.getElementById('plotCanvas');
    const title = currentPlotData?.title || 'plot';
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '');
    const filename = title.replace(/[^a-zA-Z0-9]/g, '_') + '_' + timestamp + '.png';

    // Use data URL approach for better browser compatibility (especially Safari)
    const dataUrl = canvas.toDataURL('image/png');

    // Create and click link
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    // Clean up after a short delay
    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);

    toast.success(`Saved as ${filename}`);
}

// ============================================
// PLOT HANDLERS
// ============================================

function plotThrust() {
    if (!checkDataLoaded()) return;

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const thrust = data.map(row => {
        let sum = 0;
        for (const col of ctx.thrustCols) {
            const val = Utils.parseNumber(row[col]);
            if (!isNaN(val)) sum += val;
        }
        return sum;
    });

    createPlot('Thrust vs Time', time, thrust, 'Time (s)', 'Thrust (lbf)', '#3b82f6');
}

function plotChamberPressure() {
    if (!checkDataLoaded()) return;
    if (!ctx.chamberCol) {
        toast.warning('Chamber pressure column not selected');
        return;
    }

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const pressure = data.map(row => Utils.parseNumber(row[ctx.chamberCol]));

    createPlot('Chamber Pressure vs Time', time, pressure, 'Time (s)', 'Pressure (psi)', '#ef4444');
}

function plotOFRatio() {
    if (!checkDataLoaded()) return;
    if (!ctx.fuelCol || !ctx.oxidizerCol) {
        toast.warning('Fuel and oxidizer columns not selected');
        return;
    }

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const ofRatio = data.map(row => {
        const fuel = Utils.parseNumber(row[ctx.fuelCol]);
        const ox = Utils.parseNumber(row[ctx.oxidizerCol]);
        return ox / (fuel + 1e-6);
    });

    createPlot('O/F Ratio vs Time', time, ofRatio, 'Time (s)', 'O/F Ratio', '#8b5cf6');
}

function plotFuelWeight() {
    if (!checkDataLoaded()) return;
    if (!ctx.fuelCol) {
        toast.warning('Fuel weight column not selected');
        return;
    }

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const weight = data.map(row => Utils.parseNumber(row[ctx.fuelCol]));

    createPlot('Fuel Tank Weight', time, weight, 'Time (s)', 'Weight (lbs)', '#3b82f6');
}

function plotOxidizerWeight() {
    if (!checkDataLoaded()) return;
    if (!ctx.oxidizerCol) {
        toast.warning('Oxidizer weight column not selected');
        return;
    }

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const weight = data.map(row => Utils.parseNumber(row[ctx.oxidizerCol]));

    createPlot('Oxidizer Tank Weight', time, weight, 'Time (s)', 'Weight (lbs)', '#f97316');
}

async function plotISP() {
    if (!checkDataLoaded()) return;

    const fuelMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of fuel (mdot_fuel) in lbs/s:', '');
    if (fuelMdot === null) return;

    const oxMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of oxidizer (mdot_oxidizer) in lbs/s:', '');
    if (oxMdot === null) return;

    const mdotLbs = parseFloat(fuelMdot) + parseFloat(oxMdot);
    const mdot = mdotLbs / 32.174; // Convert to slugs/s
    const gravity = 32.174;

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const thrust = data.map(row => {
        let sum = 0;
        for (const col of ctx.thrustCols) {
            const val = Utils.parseNumber(row[col]);
            if (!isNaN(val)) sum += val;
        }
        return sum;
    });

    const isp = thrust.map(t => t / (mdot * gravity));

    createPlot('ISP vs Time', time, isp, 'Time (s)', 'ISP (s)', '#10b981');
}

async function plotExhaustVelocity() {
    if (!checkDataLoaded()) return;

    const fuelMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of fuel (mdot_fuel) in lbs/s:', '');
    if (fuelMdot === null) return;

    const oxMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of oxidizer (mdot_oxidizer) in lbs/s:', '');
    if (oxMdot === null) return;

    const mdotLbs = parseFloat(fuelMdot) + parseFloat(oxMdot);
    const mdot = mdotLbs / 32.174;
    const gravity = 32.174;
    const gravityMs = 9.80665;

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const thrust = data.map(row => {
        let sum = 0;
        for (const col of ctx.thrustCols) {
            const val = Utils.parseNumber(row[col]);
            if (!isNaN(val)) sum += val;
        }
        return sum;
    });

    const isp = thrust.map(t => t / (mdot * gravity));
    const ve = isp.map(i => i * gravityMs);

    createPlot('Exhaust Velocity (Ve) vs Time', time, ve, 'Time (s)', 'Exhaust Velocity (m/s)', '#3b82f6');
}

async function plotCStar() {
    if (!checkDataLoaded()) return;
    if (!ctx.chamberCol) {
        toast.warning('Chamber pressure column not selected');
        return;
    }

    const fuelMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of fuel (mdot_fuel) in lbs/s:', '');
    if (fuelMdot === null) return;

    const oxMdot = await PromptDialog.show('Input', 'Enter the mass flow rate of oxidizer (mdot_oxidizer) in lbs/s:', '');
    if (oxMdot === null) return;

    const throatArea = await PromptDialog.show('Input', 'Enter the throat area (in ft²):', '');
    if (throatArea === null) return;

    const mdotLbs = parseFloat(fuelMdot) + parseFloat(oxMdot);
    const mdot = mdotLbs / 32.174;

    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const chamberPressure = data.map(row => Utils.parseNumber(row[ctx.chamberCol]));

    // Convert psi to lbf/ft² and calculate c*
    const cStarFtS = chamberPressure.map(p => (p * 144 * parseFloat(throatArea)) / mdot);
    const cStar = cStarFtS.map(c => c * 0.3048); // Convert to m/s

    createPlot('Characteristic Velocity (c*) vs Time', time, cStar, 'Time (s)', 'c* (m/s)', '#8b5cf6');
}

// FIXED: Test data function - uses ALL data with downsampling to prevent crashes
function testData() {
    if (!ctx.df || ctx.df.length === 0) {
        toast.warning('Please load a CSV file first');
        return;
    }
    if (!ctx.timeCol || ctx.thrustCols.length === 0) {
        toast.warning('Please select columns first');
        showColumnSelectionModal();
        return;
    }

    // Get ALL data (unfiltered) to check thrust threshold
    let time = ctx.df.map(row => Utils.parseNumber(row[ctx.timeCol]));
    let thrust = ctx.df.map(row => {
        let sum = 0;
        for (const col of ctx.thrustCols) {
            const val = Utils.parseNumber(row[col]);
            if (!isNaN(val)) sum += val;
        }
        return sum;
    });

    // Downsample if too many points to prevent crashes
    const maxPoints = 2000;
    if (time.length > maxPoints) {
        const factor = Math.ceil(time.length / maxPoints);
        time = Utils.downsample(time, factor);
        thrust = Utils.downsample(thrust, factor);
        toast.info(`Data downsampled by factor of ${factor} for display`);
    }

    // Show the target thrust line if available
    const targetThrust = ctx.lastTargetThrust;

    createPlot('Test Data: Total Thrust (All Data)', time, thrust, 'Time (s)', 'Thrust (lbf)', '#3b82f6');

    // Add threshold lines after chart is created
    if (targetThrust && currentChart) {
        setTimeout(() => {
            const lower = 0.5 * targetThrust;
            const upper = 1.5 * targetThrust;

            currentChart.options.plugins.annotation.annotations.targetLine = {
                type: 'line',
                yMin: targetThrust,
                yMax: targetThrust,
                borderColor: 'rgba(0, 255, 0, 0.8)',
                borderWidth: 2,
                label: {
                    display: true,
                    content: `Target: ${targetThrust} lbf`,
                    position: 'start',
                    backgroundColor: 'rgba(0, 255, 0, 0.8)',
                    color: '#000'
                }
            };
            currentChart.options.plugins.annotation.annotations.lowerLine = {
                type: 'line',
                yMin: lower,
                yMax: lower,
                borderColor: 'rgba(255, 165, 0, 0.6)',
                borderWidth: 1,
                borderDash: [5, 5],
                label: {
                    display: true,
                    content: `50%: ${lower.toFixed(0)} lbf`,
                    position: 'start',
                    backgroundColor: 'rgba(255, 165, 0, 0.8)',
                    color: '#000'
                }
            };
            currentChart.options.plugins.annotation.annotations.upperLine = {
                type: 'line',
                yMin: upper,
                yMax: upper,
                borderColor: 'rgba(255, 165, 0, 0.6)',
                borderWidth: 1,
                borderDash: [5, 5],
                label: {
                    display: true,
                    content: `150%: ${upper.toFixed(0)} lbf`,
                    position: 'start',
                    backgroundColor: 'rgba(255, 165, 0, 0.8)',
                    color: '#000'
                }
            };
            currentChart.update();
        }, 100);
    }
}

async function generateAllPlots() {
    if (!checkDataLoaded()) return;

    toast.info('Generating all plots... (prompts will appear for ISP, Ve, and C*)');

    const plotFunctions = [
        plotThrust,
        plotChamberPressure,
        plotOFRatio,
        plotFuelWeight,
        plotOxidizerWeight
    ];

    // Execute simple plots first
    for (const fn of plotFunctions) {
        try {
            fn();
            await new Promise(r => setTimeout(r, 500));
        } catch (e) {
            console.log('Skipped plot:', e);
        }
    }

    // The async plots (ISP, Ve, C*) will prompt for input
    await plotISP();
    await plotExhaustVelocity();
    await plotCStar();
}

// ============================================
// CUSTOM PLOT - FIXED with multiple Y-axes and constant lines
// ============================================

function openCustomPlot() {
    if (!checkDataLoaded()) return;

    // Reset constant lines
    customPlotConstantLines = [];
    updateConstantLinesList();

    // Populate column checkboxes
    const container = document.getElementById('customPlotColumnsContainer');
    container.innerHTML = '';

    // Add data columns with unit detection
    ctx.columns.forEach(col => {
        const div = document.createElement('div');
        div.className = 'checkbox-wrapper';
        const unit = Utils.extractUnit(col) || 'unknown';
        div.innerHTML = `
      <input type="checkbox" class="checkbox-input custom-col-checkbox" value="${col}" data-unit="${unit}">
      <label>${col}</label>
    `;
        container.appendChild(div);
    });

    // Add generated columns
    const generatedCols = [
        { name: 'Total Thrust (lbf)', unit: 'lbf', condition: ctx.thrustCols.length > 0 },
        { name: 'Chamber Pressure (psi)', unit: 'psi', condition: !!ctx.chamberCol },
        { name: 'O/F Ratio', unit: 'ratio', condition: ctx.fuelCol && ctx.oxidizerCol }
    ];

    generatedCols.forEach(col => {
        if (col.condition) {
            const div = document.createElement('div');
            div.className = 'checkbox-wrapper';
            div.innerHTML = `
        <input type="checkbox" class="checkbox-input custom-col-checkbox" value="${col.name}" data-generated="true" data-unit="${col.unit}">
        <label style="color: var(--accent-primary);">${col.name} (Generated)</label>
      `;
            container.appendChild(div);
        }
    });

    ModalManager.open('customPlotModal');
}

function addConstantLine() {
    const valueInput = document.getElementById('constantLineValue');
    const labelInput = document.getElementById('constantLineLabel');
    const unitSelect = document.getElementById('constantLineUnit');

    const value = parseFloat(valueInput.value);
    const unit = unitSelect ? unitSelect.value : '';
    const label = labelInput.value.trim() || `Line at ${value}${unit ? ' ' + unit : ''}`;

    if (isNaN(value)) {
        toast.warning('Please enter a valid number for the constant line value');
        return;
    }

    customPlotConstantLines.push({ value, label, unit });
    updateConstantLinesList();

    // Clear inputs
    valueInput.value = '';
    labelInput.value = '';

    toast.success(`Added constant line: ${label}`);
}

function removeConstantLine(index) {
    customPlotConstantLines.splice(index, 1);
    updateConstantLinesList();
}

function updateConstantLinesList() {
    const container = document.getElementById('constantLinesList');
    if (!container) return;

    container.innerHTML = '';
    if (customPlotConstantLines.length === 0) {
        container.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem;">No constant lines added</span>';
        return;
    }

    customPlotConstantLines.forEach((line, i) => {
        const div = document.createElement('div');
        div.className = 'constant-line-item';
        const unitStr = line.unit ? ` (${line.unit})` : '';
        div.innerHTML = `
      <span>${line.label}: ${line.value}${unitStr}</span>
      <button type="button" class="btn btn-small btn-secondary" onclick="removeConstantLine(${i})">✕</button>
    `;
        container.appendChild(div);
    });
}

// FIXED: Custom plot with multiple Y-axes and smoothing support
function generateCustomPlot() {
    const selectedCols = [];
    document.querySelectorAll('.custom-col-checkbox:checked').forEach(cb => {
        selectedCols.push({
            name: cb.value,
            generated: cb.dataset.generated === 'true',
            unit: cb.dataset.unit || 'unknown'
        });
    });

    if (selectedCols.length === 0) {
        toast.warning('Please select at least one column');
        return;
    }

    const title = document.getElementById('customPlotTitle').value || 'Custom Plot';
    ModalManager.close('customPlotModal');

    // Get data
    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));

    // Group columns by unit for multiple Y-axes
    const unitGroups = {};
    selectedCols.forEach(col => {
        const unit = col.unit;
        if (!unitGroups[unit]) {
            unitGroups[unit] = [];
        }
        unitGroups[unit].push(col);
    });

    const units = Object.keys(unitGroups);
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

    // Create datasets
    const datasets = [];
    customPlotRawDatasets = []; // Reset raw data storage for smoothing
    let colorIndex = 0;

    selectedCols.forEach((col, i) => {
        let yData;

        if (col.generated) {
            // Handle generated columns
            if (col.name === 'Total Thrust (lbf)') {
                yData = data.map(row => {
                    let sum = 0;
                    for (const c of ctx.thrustCols) {
                        const val = Utils.parseNumber(row[c]);
                        if (!isNaN(val)) sum += val;
                    }
                    return sum;
                });
            } else if (col.name === 'Chamber Pressure (psi)') {
                yData = data.map(row => Utils.parseNumber(row[ctx.chamberCol]));
            } else if (col.name === 'O/F Ratio') {
                yData = data.map(row => {
                    const fuel = Utils.parseNumber(row[ctx.fuelCol]);
                    const ox = Utils.parseNumber(row[ctx.oxidizerCol]);
                    return ox / (fuel + 1e-6);
                });
            }
        } else {
            yData = data.map(row => Utils.parseNumber(row[col.name]));
        }

        // Store raw data for smoothing
        customPlotRawDatasets.push([...yData]);

        const color = colors[colorIndex % colors.length];
        colorIndex++;

        // Determine which y-axis to use
        const unitIndex = units.indexOf(col.unit);
        const yAxisID = unitIndex === 0 ? 'y' : `y${unitIndex}`;

        datasets.push({
            label: col.name,
            data: time.map((x, j) => ({ x: x, y: yData[j] })),
            borderColor: color,
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
            tension: 0,
            yAxisID: yAxisID
        });
    });

    // Build scales object with multiple Y-axes
    const scales = {
        x: {
            type: 'linear',
            title: {
                display: true,
                text: 'Time (s)',
                color: '#b8b8d4'
            },
            ticks: { color: '#b8b8d4' },
            grid: { color: 'rgba(255,255,255,0.1)' }
        }
    };

    // Create Y-axes for each unit
    const axisColors = ['#b8b8d4', '#3b82f6', '#ef4444', '#10b981'];
    units.forEach((unit, i) => {
        const axisId = i === 0 ? 'y' : `y${i}`;
        scales[axisId] = {
            type: 'linear',
            position: i === 0 ? 'left' : 'right',
            title: {
                display: true,
                text: unit === 'unknown' ? 'Value' : unit,
                color: axisColors[i % axisColors.length]
            },
            ticks: { color: axisColors[i % axisColors.length] },
            grid: {
                display: i === 0,
                color: 'rgba(255,255,255,0.1)'
            }
        };
    });

    // Store plot data
    currentPlotData = {
        title,
        xData: time,
        yData: customPlotRawDatasets[0] || [],
        xLabel: 'Time (s)',
        yLabel: 'Value',
        color: '#3b82f6',
        rawYData: customPlotRawDatasets[0] || [],
        isCustomPlot: true
    };

    selectedPoints = [];

    document.getElementById('plotModalTitle').textContent = title;
    document.getElementById('smoothingSlider').value = 1;
    document.getElementById('smoothingValue').textContent = '1';
    document.getElementById('avgDisplay').innerHTML = '<span style="color: var(--text-muted);">Multi-series plot - smoothing applies to all series</span>';

    ModalManager.open('plotModal');

    if (currentChart) {
        currentChart.destroy();
    }

    const canvas = document.getElementById('plotCanvas');
    const ctx2d = canvas.getContext('2d');

    // Build annotations for constant lines
    const annotations = {};
    customPlotConstantLines.forEach((line, i) => {
        annotations[`constLine${i}`] = {
            type: 'line',
            yMin: line.value,
            yMax: line.value,
            borderColor: 'rgba(255, 255, 0, 0.8)',
            borderWidth: 2,
            borderDash: [10, 5],
            label: {
                display: true,
                content: line.label,
                position: 'end',
                backgroundColor: 'rgba(255, 255, 0, 0.8)',
                color: '#000',
                font: { weight: 'bold' }
            }
        };
    });

    currentChart = new Chart(ctx2d, {
        type: 'line',
        data: {
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: { color: '#ffffff' }
                },
                title: {
                    display: true,
                    text: title,
                    color: '#ffffff',
                    font: { size: 16 }
                },
                annotation: {
                    annotations: annotations
                }
            },
            scales: scales,
            onClick: handleChartClick
        }
    });
}

// ============================================
// VENTURI MASS FLOW RATE FUNCTIONS
// ============================================

// Store current venturi type ('fuel' or 'ox')
let currentVenturiType = 'fuel';

// Unit conversion constants
const PSI_TO_PA = 6894.76;
const IN2_TO_M2 = 0.00064516;  // square inches to square meters

/**
 * Open the venturi modal for fuel or oxidizer
 * @param {string} type - 'fuel' or 'ox'
 */
function openVenturiModal(type) {
    if (!checkDataLoaded()) return;

    currentVenturiType = type;
    const title = type === 'fuel' ? 'Fuel Mass Flow Rate from Venturi' : 'Oxidizer Mass Flow Rate from Venturi';
    document.getElementById('venturiModalTitle').textContent = title;

    // Set default density based on type
    if (type === 'fuel') {
        document.getElementById('venturiRho').value = '820';  // RP-1 default for fuel
    } else {
        document.getElementById('venturiRho').value = '1141'; // LOX default for oxidizer
    }

    // Populate pressure column dropdowns
    const p1Select = document.getElementById('venturiP1Select');
    const p2Select = document.getElementById('venturiP2Select');

    p1Select.innerHTML = '<option value="">-- Select P1 --</option>';
    p2Select.innerHTML = '<option value="">-- Select P2 --</option>';

    ctx.columns.forEach(col => {
        const option1 = document.createElement('option');
        option1.value = col;
        option1.textContent = col;
        p1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = col;
        option2.textContent = col;
        p2Select.appendChild(option2);
    });

    ModalManager.open('venturiModal');
}

/**
 * Set the venturi density input value
 * @param {number} density - Density value in kg/m³
 */
function setVenturiDensity(density) {
    document.getElementById('venturiRho').value = density;
}

/**
 * Calculate and plot venturi mass flow rate
 */
function calculateVenturiMdot() {
    // Get inputs
    const p1Col = document.getElementById('venturiP1Select').value;
    const p2Col = document.getElementById('venturiP2Select').value;

    if (!p1Col || !p2Col) {
        toast.warning('Please select both P1 and P2 pressure columns');
        return;
    }

    const a1_in2 = parseFloat(document.getElementById('venturiA1').value);
    const a2_in2 = parseFloat(document.getElementById('venturiA2').value);
    const cd = parseFloat(document.getElementById('venturiCd').value);
    const y = parseFloat(document.getElementById('venturiY').value);
    const rho = parseFloat(document.getElementById('venturiRho').value);

    // Validate inputs
    if (isNaN(a1_in2) || isNaN(a2_in2) || a1_in2 <= 0 || a2_in2 <= 0) {
        toast.error('Areas must be positive numbers');
        return;
    }

    if (a2_in2 >= a1_in2) {
        toast.error('A₂ (throat) must be smaller than A₁ (upstream)');
        return;
    }

    if (isNaN(cd) || cd <= 0 || cd > 1) {
        toast.error('Discharge coefficient must be between 0 and 1');
        return;
    }

    if (isNaN(y) || y <= 0) {
        toast.error('Expansion factor must be positive');
        return;
    }

    if (isNaN(rho) || rho <= 0) {
        toast.error('Density must be positive');
        return;
    }

    // Convert areas to m²
    const a1 = a1_in2 * IN2_TO_M2;
    const a2 = a2_in2 * IN2_TO_M2;

    // Get filtered data
    const data = getFilteredData();
    const time = data.map(row => Utils.parseNumber(row[ctx.timeCol]));
    const p1_psi = data.map(row => Utils.parseNumber(row[p1Col]));
    const p2_psi = data.map(row => Utils.parseNumber(row[p2Col]));

    // Convert pressures to Pa
    const p1_pa = p1_psi.map(p => p * PSI_TO_PA);
    const p2_pa = p2_psi.map(p => p * PSI_TO_PA);

    // Calculate beta ratio squared
    const beta_sq = Math.pow(a2 / a1, 2);
    const denominator = 1 - beta_sq;

    // Venturi equation: ṁ = Cd * Y * A2 * sqrt(2 * rho * delta_p / (1 - beta²))
    const mdot = time.map((t, i) => {
        const delta_p = Math.max(0, p1_pa[i] - p2_pa[i]);  // Ensure non-negative
        const value = cd * y * a2 * Math.sqrt(2 * rho * delta_p / denominator);
        return isNaN(value) ? 0 : value;
    });

    // Close modal
    ModalManager.close('venturiModal');

    // Create plot
    const title = currentVenturiType === 'fuel'
        ? 'Fuel Mass Flow Rate from Venturi'
        : 'Oxidizer Mass Flow Rate from Venturi';
    const color = currentVenturiType === 'fuel' ? '#3b82f6' : '#f97316';

    createPlot(title, time, mdot, 'Time (s)', 'Mass Flow Rate (kg/s)', color);

    // Calculate and show statistics
    const validMdot = mdot.filter(m => m > 0);
    if (validMdot.length > 0) {
        const avgMdot = Utils.mean(validMdot);
        const maxMdot = Math.max(...validMdot);
        toast.success(`Avg: ${avgMdot.toFixed(4)} kg/s | Max: ${maxMdot.toFixed(4)} kg/s`);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function checkDataLoaded() {
    if (!ctx.df || ctx.df.length === 0) {
        toast.warning('Please load a CSV file first');
        return false;
    }
    if (!ctx.timeCol || ctx.thrustCols.length === 0) {
        toast.warning('Please select columns first');
        showColumnSelectionModal();
        return false;
    }
    return true;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hotfire Data Analyzer initialized');
});
