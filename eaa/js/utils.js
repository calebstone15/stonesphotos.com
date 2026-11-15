/**
 * ERPL Testing Analysis App - Utility Functions
 * Shared utilities for data processing and calculations
 */

// Unit conversion constants
const Utils = {
    // Conversion constants
    LBS_TO_KG: 0.453592,
    PSI_TO_PA: 6894.76,
    FT_TO_M: 0.3048,
    GRAVITY_FT_S2: 32.174,
    GRAVITY_M_S2: 9.80665,

    /**
     * Smooth data using a moving average (convolution)
     * @param {number[]} data - Array of values to smooth
     * @param {number} windowSize - Size of the smoothing window
     * @returns {number[]} Smoothed array
     */
    smooth(data, windowSize) {
        if (windowSize <= 1) return [...data];
        if (data.length === 0) return [];

        const result = [];
        const halfWindow = Math.floor(windowSize / 2);
        const len = data.length;

        // Initialize sum and count for the first window centered at i=0
        // Window range: [0, min(len-1, halfWindow)]
        let sum = 0;
        let count = 0;

        for (let j = 0; j <= Math.min(len - 1, halfWindow); j++) {
            const val = data[j];
            if (!isNaN(val)) {
                sum += val;
                count++;
            }
        }

        result.push(count > 0 ? sum / count : data[0]);

        // Sliding window
        for (let i = 1; i < len; i++) {
            // Remove element leaving the window
            const removeIdx = i - halfWindow - 1;
            if (removeIdx >= 0) {
                const removeVal = data[removeIdx];
                if (!isNaN(removeVal)) {
                    sum -= removeVal;
                    count--;
                }
            }

            // Add element entering the window
            const addIdx = i + halfWindow;
            if (addIdx < len) {
                const addVal = data[addIdx];
                if (!isNaN(addVal)) {
                    sum += addVal;
                    count++;
                }
            }

            result.push(count > 0 ? sum / count : data[i]);
        }

        return result;
    },

    /**
     * Calculate mean of an array
     * @param {number[]} arr - Array of numbers
     * @returns {number} Mean value
     */
    mean(arr) {
        const validValues = arr.filter(v => !isNaN(v) && v !== null);
        if (validValues.length === 0) return 0;
        return validValues.reduce((a, b) => a + b, 0) / validValues.length;
    },

    /**
     * Calculate trapezoidal integration
     * @param {number[]} y - Y values
     * @param {number[]} x - X values (time)
     * @returns {number} Integrated value
     */
    trapz(y, x) {
        let sum = 0;
        for (let i = 1; i < y.length; i++) {
            sum += (y[i] + y[i - 1]) * (x[i] - x[i - 1]) / 2;
        }
        return sum;
    },

    /**
     * Linear regression
     * @param {number[]} x - X values
     * @param {number[]} y - Y values
     * @returns {{slope: number, intercept: number}} Regression result
     */
    linearRegression(x, y) {
        const n = x.length;
        let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

        for (let i = 0; i < n; i++) {
            if (isNaN(x[i]) || isNaN(y[i])) continue;
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumX2 += x[i] * x[i];
        }

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return { slope, intercept };
    },

    /**
     * Binary search to find closest index
     * @param {number[]} arr - Sorted array
     * @param {number} target - Target value
     * @returns {number} Index of closest value
     */
    searchSorted(arr, target) {
        let low = 0;
        let high = arr.length - 1;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    },

    /**
     * Parse numeric value from string, handling various formats
     * @param {string|number} value - Value to parse
     * @returns {number} Parsed number or NaN
     */
    parseNumber(value) {
        if (typeof value === 'number') return value;
        if (!value || value === '') return NaN;

        const cleaned = String(value).trim().replace(/,/g, '');
        return parseFloat(cleaned);
    },

    /**
     * Convert time string to seconds from start
     * @param {string[]} timeStrings - Array of time strings
     * @returns {number[]} Array of seconds
     */
    parseTimeColumn(timeData) {
        const len = timeData.length;
        const numeric = new Array(len);
        const dates = new Array(len);
        let anyValidDate = false;
        let minTs = Infinity;

        for (let i = 0; i < len; i++) {
            const v = timeData[i];
            
            // Check if it's an ISO date or contains typical date characters
            const isDateString = typeof v === 'string' && ((v.includes('-') && v.includes('T')) || v.includes(':'));
            
            let n = NaN;
            if (!isDateString) {
                n = this.parseNumber(v);
            }
            
            numeric[i] = n;

            if (!isNaN(n)) {
                // Optimization: switch to numeric-only parsing for the rest
                for (let j = i + 1; j < len; j++) {
                    const nextV = timeData[j];
                    const nextIsDate = typeof nextV === 'string' && ((nextV.includes('-') && nextV.includes('T')) || nextV.includes(':'));
                    numeric[j] = nextIsDate ? NaN : this.parseNumber(nextV);
                }
                return numeric;
            }

            // Fallback to date parsing
            const d = new Date(v);
            if (!isNaN(d.getTime())) {
                dates[i] = d;
                anyValidDate = true;
                const ts = d.getTime();
                if (ts < minTs) minTs = ts;
            } else {
                dates[i] = null;
            }
        }

        if (anyValidDate) {
            const result = new Array(len);
            for (let i = 0; i < len; i++) {
                const d = dates[i];
                if (d === null) {
                    result[i] = NaN;
                } else {
                    result[i] = (d.getTime() - minTs) / 1000;
                }
            }
            return result;
        }

        return numeric;
    },

    /**
     * Downsample an array
     * @param {number[]} arr - Array to downsample
     * @param {number} factor - Downsampling factor
     * @returns {number[]} Downsampled array
     */
    downsample(arr, factor) {
        if (factor <= 1) return [...arr];
        const len = arr.length;
        const newLen = Math.ceil(len / factor);
        const result = new Array(newLen);
        for (let i = 0, j = 0; i < len; i += factor, j++) {
            result[j] = arr[i];
        }
        return result;
    },

    /**
     * Filter arrays by mask
     * @param {boolean[]} mask - Boolean mask array
     * @param {...number[]} arrays - Arrays to filter
     * @returns {number[][]} Filtered arrays
     */
    applyMask(mask, ...arrays) {
        return arrays.map(arr =>
            arr.filter((_, i) => mask[i])
        );
    },

    /**
     * Create a mask for data within thrust threshold
     * @param {number[]} thrust - Thrust data
     * @param {number} targetThrust - Target thrust value
     * @returns {boolean[]} Mask array
     */
    createThrustMask(thrust, targetThrust) {
        const lower = 0.5 * targetThrust;
        const upper = 1.5 * targetThrust;
        return thrust.map(t => t >= lower && t <= upper);
    },

    /**
     * Expand a mask by a certain percentage
     * @param {boolean[]} mask - Original mask
     * @param {number} extraPercent - Extra data percentage
     * @returns {boolean[]} Expanded mask
     */
    expandMask(mask, extraPercent) {
        const expanded = [...mask];
        // Optimization: Use indexOf and lastIndexOf to avoid array copy and reversal
        const startIdx = mask.indexOf(true);
        const endIdx = mask.lastIndexOf(true);

        if (startIdx === -1) return expanded;

        const extraPoints = Math.max(1, Math.floor(mask.length * extraPercent / 100));
        const newStart = Math.max(0, startIdx - extraPoints);
        const newEnd = Math.min(mask.length - 1, endIdx + extraPoints);

        for (let i = newStart; i <= newEnd; i++) {
            expanded[i] = true;
        }

        return expanded;
    },

    /**
     * Format a number for display
     * @param {number} value - Value to format
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted string
     */
    formatNumber(value, decimals = 3) {
        if (isNaN(value) || value === null) return '--';
        return value.toFixed(decimals);
    },

    /**
     * Download data as a PNG image
     * @param {HTMLCanvasElement} canvas - Canvas element
     * @param {string} filename - Filename for download
     */
    downloadCanvasAsPNG(canvas, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
    },

    /**
     * Extract unit from column name (e.g., "Thrust (lbf)" -> "lbf")
     * @param {string} name - Column name
     * @returns {string|null} Unit or null
     */
    extractUnit(name) {
        // Match parenthesized units like "(lbf)" or "(psi)"
        const match = name.match(/\(([^)]+)\)/);
        if (match) return match[1];
        // Match underscore-suffix units like "LC0_lbf" or "PT0_psi"
        const underscoreMatch = name.match(/_([a-zA-Z]+)$/);
        if (underscoreMatch) return underscoreMatch[1];
        return null;
    }
};

// Export for use in other modules
window.Utils = Utils;
