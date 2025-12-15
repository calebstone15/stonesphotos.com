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

        const result = [];
        const halfWindow = Math.floor(windowSize / 2);

        for (let i = 0; i < data.length; i++) {
            let sum = 0;
            let count = 0;

            for (let j = Math.max(0, i - halfWindow); j <= Math.min(data.length - 1, i + halfWindow); j++) {
                if (!isNaN(data[j])) {
                    sum += data[j];
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
        // First try parsing as numbers
        const numeric = timeData.map(v => this.parseNumber(v));
        if (!numeric.every(isNaN)) {
            return numeric;
        }

        // Try parsing as dates
        const dates = timeData.map(v => {
            const d = new Date(v);
            return isNaN(d.getTime()) ? null : d;
        });

        if (dates.some(d => d !== null)) {
            const validDates = dates.filter(d => d !== null);
            const minTime = Math.min(...validDates.map(d => d.getTime()));

            return dates.map(d => {
                if (d === null) return NaN;
                return (d.getTime() - minTime) / 1000;
            });
        }

        return timeData.map(() => NaN);
    },

    /**
     * Downsample an array
     * @param {number[]} arr - Array to downsample
     * @param {number} factor - Downsampling factor
     * @returns {number[]} Downsampled array
     */
    downsample(arr, factor) {
        if (factor <= 1) return [...arr];
        const result = [];
        for (let i = 0; i < arr.length; i += factor) {
            result.push(arr[i]);
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
        const startIdx = mask.findIndex(v => v);
        let endIdx = mask.length - 1 - [...mask].reverse().findIndex(v => v);

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
        const match = name.match(/\(([^)]+)\)/);
        return match ? match[1] : null;
    }
};

// Export for use in other modules
window.Utils = Utils;
