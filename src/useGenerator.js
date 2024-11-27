"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGenerator = void 0;
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        if (padString === void 0) { padString = ' '; }
        targetLength = targetLength >> 0; // Ensure integer
        padString = String(padString || ' ');
        if (this.length >= targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                // Repeat padString to meet targetLength
                padString += padString.repeat(Math.ceil(targetLength / padString.length));
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
var useGenerator = function () {
    /**
     * Generate calendar days from the current day or a specific start date.
     * @param daysToGenerate - Number of days to generate (default: 10).
     * @returns Array of dates with formatted day and date.
     */
    var getCalendarDays = function (daysToGenerate) {
        if (daysToGenerate === void 0) { daysToGenerate = 10; }
        var days = [];
        var today = new Date();
        for (var i = 0; i < daysToGenerate; i++) {
            var currentDate = new Date(today.getTime());
            currentDate.setDate(today.getDate() + i);
            var formattedDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
            var day = currentDate.toLocaleDateString('en-US', { weekday: 'short' }); // Day: Mon, Tue, etc.
            days.push({ date: formattedDate, day: day });
        }
        return days;
    };
    /**
     * Generate a range of hours within a day.
     * @param startHour - Start hour (default: 0).
     * @param endHour - End hour (default: 23).
     * @param interval - Minute intervals (default: 60).
     * @returns Array of times in HH:mm format.
     */
    var getHoursRange = function (startHour, endHour, interval) {
        if (startHour === void 0) { startHour = 0; }
        if (endHour === void 0) { endHour = 23; }
        if (interval === void 0) { interval = 60; }
        var hours = [];
        for (var i = startHour; i <= endHour; i++) {
            for (var j = 0; j < 60; j += interval) {
                var hour = i.toString().padStart(2, '0'); // Ensure 2-digit hours
                var minute = j.toString().padStart(2, '0'); // Ensure 2-digit minutes
                hours.push("".concat(hour, ":").concat(minute));
            }
        }
        return hours;
    };
    /**
     * Generate a range of years.
     * @param startYear - Start year (default: current year).
     * @param endYear - End year (default: current year + 10).
     * @returns Array of years.
     */
    var getYearRange = function (startYear, endYear) {
        if (startYear === void 0) { startYear = new Date().getFullYear(); }
        if (endYear === void 0) { endYear = new Date().getFullYear() + 10; }
        var years = [];
        for (var year = startYear; year <= endYear; year++) {
            years.push(year);
        }
        return years;
    };
    /**
     * Format a given date to a readable string.
     * @param date - Date object.
     * @param options - Intl.DateTimeFormat options.
     * @returns Formatted date string.
     */
    var formatDate = function (date, options) {
        if (options === void 0) { options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; }
        return date.toLocaleDateString('en-US', options);
    };
    /**
     * Get the current time in HH:mm:ss format.
     * @returns Current time string.
     */
    var getCurrentTime = function () {
        var now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
    return {
        getCalendarDays: getCalendarDays,
        getHoursRange: getHoursRange,
        getYearRange: getYearRange,
        formatDate: formatDate,
        getCurrentTime: getCurrentTime,
    };
};
exports.useGenerator = useGenerator;
exports.default = exports.useGenerator;
