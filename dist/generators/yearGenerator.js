"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearRange = void 0;
// This file contains a function that generates a range of years.
/**
 * Generates an array of years within a specified range.
 *
 * @param {number} [startYear=new Date().getFullYear()] - The starting year of the range. Defaults to the current year.
 * @param {number} [endYear=startYear + 10] - The ending year of the range. Defaults to 10 years after the starting year.
 * @returns {number[]} An array of years from the start year to the end year (exclusive).
 *
 * @example
 * // Returns an array of years from the current year to 10 years in the future
 * const years = getYearRange();
 *
 * @example
 * // Returns an array of years from 2000 to 2010
 * const years = getYearRange(2000, 2010);
 */
var getYearRange = function (startYear, endYear) {
    if (startYear === void 0) { startYear = new Date().getFullYear(); }
    if (endYear === void 0) { endYear = startYear + 10; }
    var years = [];
    for (var i = startYear; i <= endYear; i++) {
        years.push(i);
    }
    return years;
};
exports.getYearRange = getYearRange;
