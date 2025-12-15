/**
 * ERPL CdA Calculator - JavaScript Implementation
 * Complete port of the Python cda_calculator.py
 */

// ============================================
// STATE MANAGEMENT
// ============================================

const cdaState = {
    df: null,           // Parsed CSV data
    columns: [],        // Column names
    timeCol: null,
    pressureCol: null,
    weightCol: null,
    startTime: null,
    endTime: null,
    calculatedMdot: null,
    calculatedCdA: null,
    timeData: null,     // Numeric time array
    pressureData: null, // Numeric pressure array
    weightData: null    // Numeric weight array
};

// Chart instance for time selection
let timeSelectionChart = null;
let clickCount = 0;

// Unit conversion constants
const LBS_TO_KG = 0.453592;
const PSI_TO_PA = 6894.76;

// ============================================
// CSV LOADING
// ============================================

function cdaLoadCSV(input) {
    const file = input.files[0];
    if (!file) return;

    document.getElementById('cdaFileLabel').textContent = 'Loading...';

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function (results) {
            if (results.errors.length > 0) {
                toast.error('Error parsing CSV: ' + results.errors[0].message);
                return;
            }

            cdaState.df = results.data;
            cdaState.columns = results.meta.fields;

            document.getElementById('cdaFileLabel').textContent = `Loaded: ${file.name}`;
            toast.success(`Loaded ${cdaState.df.length} rows`);

            // Populate column dropdowns
            populateColumnDropdowns();

            // Auto-detect columns
            autoDetectColumns();
        },
        error: function (error) {
            toast.error('Failed to load CSV: ' + error.message);
            document.getElementById('cdaFileLabel').textContent = 'Load failed';
        }
    });
}

function populateColumnDropdowns() {
    const selects = ['cdaTimeSelect', 'cdaPressureSelect', 'cdaWeightSelect', 'pLowColumnSelect'];

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (!select) return;

        select.innerHTML = '<option value="">-- Select --</option>';
        cdaState.columns.forEach(col => {
            const option = document.createElement('option');
            option.value = col;
            option.textContent = col;
            select.appendChild(option);
        });
    });
}

function autoDetectColumns() {
    cdaState.timeCol = null;
    cdaState.pressureCol = null;
    cdaState.weightCol = null;

    for (const col of cdaState.columns) {
        const lower = col.toLowerCase();

        // Time
        if (!cdaState.timeCol && (lower === 'time' || lower === 't' || lower.includes('time'))) {
            cdaState.timeCol = col;
            document.getElementById('cdaTimeSelect').value = col;
        }

        // Pressure
        if (!cdaState.pressureCol && (lower.includes('pressure') || lower.includes('press'))) {
            cdaState.pressureCol = col;
            document.getElementById('cdaPressureSelect').value = col;
        }

        // Weight
        if (!cdaState.weightCol && (lower.includes('weight') || lower.includes('mass'))) {
            cdaState.weightCol = col;
            document.getElementById('cdaWeightSelect').value = col;
        }
    }
}

function cdaUpdateColumn(type) {
    if (type === 'time') {
        cdaState.timeCol = document.getElementById('cdaTimeSelect').value;
    } else if (type === 'pressure') {
        cdaState.pressureCol = document.getElementById('cdaPressureSelect').value;
    } else if (type === 'weight') {
        cdaState.weightCol = document.getElementById('cdaWeightSelect').value;
    }
}

// ============================================
// TIME SELECTION PLOT
// ============================================

function openTimeSelectionPlot() {
    if (!cdaState.df) {
        toast.warning('Please load a CSV file first');
        return;
    }

    if (!cdaState.timeCol || !cdaState.pressureCol) {
        toast.warning('Please select Time and Pressure columns');
        return;
    }

    // Parse data
    parseNumericData();

    if (!cdaState.timeData || cdaState.timeData.length === 0) {
        toast.error('Could not parse time data');
        return;
    }

    // Reset state
    cdaState.startTime = null;
    cdaState.endTime = null;
    clickCount = 0;

    document.getElementById('plotStartLabel').textContent = 'Click on plot...';
    document.getElementById('plotEndLabel').textContent = '--';
    document.getElementById('confirmTimeBtn').disabled = true;

    ModalManager.open('timeSelectionModal');

    // Create chart after modal is visible
    setTimeout(() => {
        createTimeSelectionChart();
    }, 100);
}

function parseNumericData() {
    // Parse time column
    const rawTime = cdaState.df.map(row => row[cdaState.timeCol]);
    cdaState.timeData = Utils.parseTimeColumn(rawTime);

    // Parse pressure
    cdaState.pressureData = cdaState.df.map(row => Utils.parseNumber(row[cdaState.pressureCol]));

    // Parse weight if available
    if (cdaState.weightCol) {
        cdaState.weightData = cdaState.df.map(row => Utils.parseNumber(row[cdaState.weightCol]));
    }
}

function createTimeSelectionChart() {
    const canvas = document.getElementById('timeSelectionCanvas');
    const ctx = canvas.getContext('2d');

    if (timeSelectionChart) {
        timeSelectionChart.destroy();
    }

    // Downsample for performance if needed
    const maxPoints = 2000;
    let time = cdaState.timeData;
    let pressure = cdaState.pressureData;
    let weight = cdaState.weightData;

    if (time.length > maxPoints) {
        const step = Math.ceil(time.length / maxPoints);
        time = Utils.downsample(time, step);
        pressure = Utils.downsample(pressure, step);
        if (weight) weight = Utils.downsample(weight, step);
    }

    // Build datasets
    const datasets = [
        {
            label: 'Pressure (PSI)',
            data: time.map((t, i) => ({ x: t, y: pressure[i] })),
            borderColor: '#3b82f6',
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            pointRadius: 0,
            yAxisID: 'y'
        }
    ];

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
        },
        y: {
            type: 'linear',
            position: 'left',
            title: {
                display: true,
                text: 'Pressure (PSI)',
                color: '#b8b8d4'
            },
            ticks: { color: '#b8b8d4' },
            grid: { color: 'rgba(255,255,255,0.1)' }
        }
    };

    if (weight && weight.length > 0) {
        datasets.push({
            label: 'Weight (lbs)',
            data: time.map((t, i) => ({ x: t, y: weight[i] })),
            borderColor: '#10b981',
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            pointRadius: 0,
            yAxisID: 'y1'
        });

        scales.y1 = {
            type: 'linear',
            position: 'right',
            title: {
                display: true,
                text: 'Weight (lbs)',
                color: '#b8b8d4'
            },
            ticks: { color: '#b8b8d4' },
            grid: { display: false }
        };
    }

    timeSelectionChart = new Chart(ctx, {
        type: 'line',
        data: { datasets },
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
                    text: 'Click to select start and end times',
                    color: '#ffffff'
                },
                annotation: {
                    annotations: {}
                }
            },
            scales: scales,
            onClick: handleTimeSelectionClick
        }
    });
}

function handleTimeSelectionClick(event, elements) {
    if (!timeSelectionChart) return;

    const canvasPosition = Chart.helpers.getRelativePosition(event, timeSelectionChart);
    const xValue = timeSelectionChart.scales.x.getValueForPixel(canvasPosition.x);

    clickCount++;

    if (clickCount === 1) {
        // First click - start time
        cdaState.startTime = xValue;
        cdaState.endTime = null;

        document.getElementById('plotStartLabel').textContent = `${xValue.toFixed(3)} s`;
        document.getElementById('plotEndLabel').textContent = '--';
        document.getElementById('confirmTimeBtn').disabled = true;

        // Clear old annotations
        timeSelectionChart.options.plugins.annotation.annotations = {};

        // Add start line
        timeSelectionChart.options.plugins.annotation.annotations.startLine = {
            type: 'line',
            xMin: xValue,
            xMax: xValue,
            borderColor: 'rgba(0, 255, 0, 0.8)',
            borderWidth: 2,
            borderDash: [5, 5]
        };

    } else if (clickCount === 2) {
        // Second click - end time
        cdaState.endTime = xValue;

        // Ensure start < end
        if (cdaState.endTime < cdaState.startTime) {
            [cdaState.startTime, cdaState.endTime] = [cdaState.endTime, cdaState.startTime];
        }

        document.getElementById('plotStartLabel').textContent = `${cdaState.startTime.toFixed(3)} s`;
        document.getElementById('plotEndLabel').textContent = `${cdaState.endTime.toFixed(3)} s`;
        document.getElementById('confirmTimeBtn').disabled = false;

        // Update start line position
        timeSelectionChart.options.plugins.annotation.annotations.startLine.xMin = cdaState.startTime;
        timeSelectionChart.options.plugins.annotation.annotations.startLine.xMax = cdaState.startTime;

        // Add end line
        timeSelectionChart.options.plugins.annotation.annotations.endLine = {
            type: 'line',
            xMin: cdaState.endTime,
            xMax: cdaState.endTime,
            borderColor: 'rgba(255, 0, 0, 0.8)',
            borderWidth: 2,
            borderDash: [5, 5]
        };

        clickCount = 0;
    }

    timeSelectionChart.update();
}

function resetTimeSelection() {
    cdaState.startTime = null;
    cdaState.endTime = null;
    clickCount = 0;

    document.getElementById('plotStartLabel').textContent = 'Click on plot...';
    document.getElementById('plotEndLabel').textContent = '--';
    document.getElementById('confirmTimeBtn').disabled = true;

    if (timeSelectionChart) {
        timeSelectionChart.options.plugins.annotation.annotations = {};
        timeSelectionChart.update();
    }
}

function confirmTimeSelection() {
    if (cdaState.startTime === null || cdaState.endTime === null) {
        toast.warning('Please select both start and end times');
        return;
    }

    // Calculate mdot from weight data
    calculateMdot();

    // Update display
    document.getElementById('cdaStartTime').textContent = `${cdaState.startTime.toFixed(3)} s`;
    document.getElementById('cdaEndTime').textContent = `${cdaState.endTime.toFixed(3)} s`;
    document.getElementById('cdaStartTime').style.color = 'var(--success)';
    document.getElementById('cdaEndTime').style.color = 'var(--success)';

    closeTimeSelectionModal();
    toast.success('Time range selected');
}

function closeTimeSelectionModal() {
    ModalManager.close('timeSelectionModal');
    if (timeSelectionChart) {
        timeSelectionChart.destroy();
        timeSelectionChart = null;
    }
}

// ============================================
// MDOT CALCULATION
// ============================================

function calculateMdot() {
    if (cdaState.startTime === null || cdaState.endTime === null) {
        cdaState.calculatedMdot = null;
        document.getElementById('calculatedMdot').textContent = '--';
        return;
    }

    if (!cdaState.weightCol || !cdaState.weightData) {
        cdaState.calculatedMdot = null;
        document.getElementById('calculatedMdot').textContent = 'No weight data';
        document.getElementById('calculatedMdot').style.color = 'var(--warning)';
        return;
    }

    // Get data within time range
    const mask = cdaState.timeData.map(t => t >= cdaState.startTime && t <= cdaState.endTime);

    const validIndices = mask.map((v, i) => v ? i : -1).filter(i => i >= 0);

    if (validIndices.length < 2) {
        cdaState.calculatedMdot = null;
        document.getElementById('calculatedMdot').textContent = 'Not enough data';
        document.getElementById('calculatedMdot').style.color = 'var(--error)';
        return;
    }

    const tSlice = validIndices.map(i => cdaState.timeData[i]).filter(v => !isNaN(v));
    const wSlice = validIndices.map(i => cdaState.weightData[i]).filter(v => !isNaN(v));

    if (tSlice.length < 2) {
        cdaState.calculatedMdot = null;
        document.getElementById('calculatedMdot').textContent = 'Invalid data';
        document.getElementById('calculatedMdot').style.color = 'var(--error)';
        return;
    }

    // Calculate slope using linear regression
    const { slope } = Utils.linearRegression(tSlice, wSlice);

    // mdot = -slope (positive flow out of decreasing tank), convert to kg/s
    const mdotLbs = -slope;
    const mdotKg = mdotLbs * LBS_TO_KG;

    cdaState.calculatedMdot = mdotKg;
    document.getElementById('calculatedMdot').textContent = mdotKg.toFixed(4);
    document.getElementById('calculatedMdot').style.color = 'var(--success)';
}

// ============================================
// PRESSURE HELPERS
// ============================================

function useAvgPressure(which) {
    if (cdaState.startTime === null || cdaState.endTime === null) {
        toast.warning('Please select start and end times first');
        return;
    }

    if (!cdaState.timeData || !cdaState.pressureData) {
        toast.error('No pressure data available');
        return;
    }

    // Get average pressure in time range
    const mask = cdaState.timeData.map(t => t >= cdaState.startTime && t <= cdaState.endTime);
    const pressureInRange = cdaState.pressureData.filter((_, i) => mask[i]);

    if (pressureInRange.length === 0) {
        toast.error('No data in selected time range');
        return;
    }

    const avgPressure = Utils.mean(pressureInRange);

    if (which === 'high') {
        document.getElementById('pHighInput').value = avgPressure.toFixed(2);
    }

    toast.success(`Average pressure: ${avgPressure.toFixed(2)} PSI`);
}

function setAmbientPressure() {
    document.getElementById('pLowInput').value = '14.7';
}

function selectPLowFromCSV() {
    if (!cdaState.df) {
        toast.warning('Please load a CSV file first');
        return;
    }

    if (cdaState.startTime === null || cdaState.endTime === null) {
        toast.warning('Please select start and end times first');
        return;
    }

    ModalManager.open('pLowColumnModal');
}

function applyPLowColumn() {
    const col = document.getElementById('pLowColumnSelect').value;
    if (!col) {
        toast.warning('Please select a column');
        return;
    }

    // Get data for selected column
    const colData = cdaState.df.map(row => Utils.parseNumber(row[col]));

    // Filter to time range
    const mask = cdaState.timeData.map(t => t >= cdaState.startTime && t <= cdaState.endTime);
    const dataInRange = colData.filter((_, i) => mask[i]);

    if (dataInRange.length === 0) {
        toast.error('No data in selected time range');
        return;
    }

    const avgPLow = Utils.mean(dataInRange);
    document.getElementById('pLowInput').value = avgPLow.toFixed(2);

    ModalManager.close('pLowColumnModal');
    toast.success(`P_low set to ${avgPLow.toFixed(2)} PSI`);
}

// ============================================
// CDA CALCULATION
// ============================================

function calculateCdA() {
    // Get inputs
    const pHighPSI = parseFloat(document.getElementById('pHighInput').value);
    const pLowPSI = parseFloat(document.getElementById('pLowInput').value);
    const rho = parseFloat(document.getElementById('densityInput').value);

    // Validate
    if (isNaN(pHighPSI) || isNaN(pLowPSI) || isNaN(rho)) {
        toast.error('Please enter valid numeric values for all parameters');
        return;
    }

    if (cdaState.calculatedMdot === null) {
        toast.error('Please select time range to calculate mdot first');
        return;
    }

    const mdot = cdaState.calculatedMdot;

    // Convert pressures to Pa
    const pHighPa = pHighPSI * PSI_TO_PA;
    const pLowPa = pLowPSI * PSI_TO_PA;

    // Calculate ΔP
    const deltaP = pHighPa - pLowPa;

    if (deltaP <= 0) {
        toast.error('P_high must be greater than P_low');
        return;
    }

    if (rho <= 0) {
        toast.error('Density must be positive');
        return;
    }

    // Calculate CdA = mdot / sqrt(2 * rho * delta_p)
    const cda = mdot / Math.sqrt(2 * rho * deltaP);

    // Store for setpoint calculator
    cdaState.calculatedCdA = cda;

    // Display result
    const cdaMm2 = cda * 1e6; // Convert to mm²

    document.getElementById('cdaResultDisplay').style.display = 'block';
    document.getElementById('cdaResultValue').textContent = cda.toFixed(8);
    document.getElementById('cdaResultUnit').textContent = `m² (${cdaMm2.toFixed(2)} mm²)`;

    toast.success(`CdA calculated: ${cda.toExponential(4)} m²`);
}

// ============================================
// SET PRESSURE CALCULATOR
// ============================================

function copyCalculatedCdA() {
    if (cdaState.calculatedCdA !== null) {
        document.getElementById('setpointCdaInput').value = cdaState.calculatedCdA.toFixed(10);
        toast.success('CdA copied');
    } else {
        toast.warning('Please calculate CdA first');
    }
}

function copyCalculatedMdot() {
    if (cdaState.calculatedMdot !== null) {
        document.getElementById('setpointMdotInput').value = cdaState.calculatedMdot.toFixed(4);
        toast.success('ṁ copied');
    } else {
        toast.warning('Please select a time range with weight data first');
    }
}

function setDensityPreset(value) {
    document.getElementById('setpointDensityInput').value = value;
}

function calculateSetPressure() {
    // Get inputs
    const cda = parseFloat(document.getElementById('setpointCdaInput').value);
    const mdot = parseFloat(document.getElementById('setpointMdotInput').value);
    const rho = parseFloat(document.getElementById('setpointDensityInput').value);
    const manifoldPPSI = parseFloat(document.getElementById('manifoldPressureInput').value);

    // Validate
    if (isNaN(cda) || isNaN(mdot) || isNaN(rho) || isNaN(manifoldPPSI)) {
        toast.error('Please enter valid numeric values for all inputs');
        return;
    }

    if (cda <= 0) {
        toast.error('CdA must be positive');
        return;
    }

    if (rho <= 0) {
        toast.error('Density must be positive');
        return;
    }

    // Convert manifold pressure to Pa
    const manifoldPPa = manifoldPPSI * PSI_TO_PA;

    // Calculate required pressure drop across injector
    // From: mdot = CdA * sqrt(2 * rho * dP)
    // Solve for dP: dP = (mdot / CdA)^2 / (2 * rho)
    const deltaPPa = Math.pow(mdot / cda, 2) / (2 * rho);

    // Total set pressure = pressure drop + manifold pressure
    const pSetPa = deltaPPa + manifoldPPa;

    // Convert to PSI
    const pSetPSI = pSetPa / PSI_TO_PA;

    // Display results
    document.getElementById('setpointResultDisplay').style.display = 'block';
    document.getElementById('setpointResultPSI').textContent = pSetPSI.toFixed(1);
    document.getElementById('setpointResultPa').textContent = `(${pSetPa.toFixed(0)} Pa)`;

    toast.success(`Required set pressure: ${pSetPSI.toFixed(1)} PSI`);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('CdA Calculator initialized');
});
