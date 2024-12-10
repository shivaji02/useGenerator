"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractors = exports.getCalendarDays = void 0;
/**
 * Generates a list of days to be used in the calendar starting from today
 * @param daysToGenerate
 * @returns Array of calender day objects.
 */
// This function generates a list of days to be used in the calendar
var getCalendarDays = function (daysToGenerate) {
    if (daysToGenerate === void 0) { daysToGenerate = 10; }
    var days = [];
    var today = new Date();
    for (var i = 0; i < daysToGenerate; i++) {
        var currentDate = new Date(today.getTime());
        currentDate.setDate(today.getDate() + i);
        var formattedDate = currentDate.toISOString().split('T')[0];
        var day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        var month = currentDate.toLocaleDateString('en-US', { month: 'short' });
        var date = currentDate.getDate();
        days.push({
            date: formattedDate,
            day: day,
            dayOfMonth: date,
            daysToGenerate: daysToGenerate,
            month: month,
        });
    }
    return days;
};
exports.getCalendarDays = getCalendarDays;
/**
 * Extracts the weekdays  in numbers from the generated days.
 * @param days Array of calender day objects.
 * @returns Array of weekday strings.
 */
var extractWeekdays = function (days) {
    return days.map(function (day) { return day.day; });
};
/**
 * Extracts the month from the calender day object.
 * @param days Array of calender day objects.
 * @returns Array of month strings.
 */
var extractMonths = function (days) {
    return days.map(function (day) { return day.month; });
};
/**
* Extracts days of the month from the geneated days.
* @param days Array of calender day objects.
* @returns Array of day of  the month numbers.
*/
var extractDates = function (days) {
    return days.map(function (day) { return day.dayOfMonth; });
};
exports.extractors = {
    extractWeekdays: extractWeekdays,
    extractMonths: extractMonths,
    extractDates: extractDates,
};
