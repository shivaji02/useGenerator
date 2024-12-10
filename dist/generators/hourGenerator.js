"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedHours = exports.getHoursRange = void 0;
var getHoursRange = function (startHour, endHour, interval, format) {
    if (startHour === void 0) { startHour = 0; }
    if (endHour === void 0) { endHour = 24; }
    if (interval === void 0) { interval = 1; }
    if (format === void 0) { format = '12-hour'; }
    var hours = [];
    for (var i = startHour; i <= endHour; i++) {
        for (var j = 0; j < 60; j += interval) {
            var hour = i.toString().padStart(2, '0');
            var minute = j.toString().padStart(2, '0');
            if (format === '24-hour') {
                hours.push("".concat(hour, ":").concat(minute));
            }
            else {
                hours.push(convertToAmPm(i, j));
            }
        }
    }
    return hours;
};
exports.getHoursRange = getHoursRange;
var getFormattedHours = function (startHour, endHour, interval, format) {
    if (startHour === void 0) { startHour = 0; }
    if (endHour === void 0) { endHour = 24; }
    if (interval === void 0) { interval = 1; }
    if (format === void 0) { format = '12-hour'; }
    return (0, exports.getHoursRange)(startHour, endHour, interval, format);
};
exports.getFormattedHours = getFormattedHours;
/**
 * Convert 24-hour time to 12-hour time with AM/PM.
 * @param hour - Hour in 24-hour format.
 * @param minute - Minute.
 * @returns Time in 12-hour format with AM/PM.
 */
var convertToAmPm = function (hour, minute) {
    var period = hour >= 12 ? 'PM' : 'AM';
    var adjustedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
    var formattedHour = adjustedHour.toString().padStart(2, '0');
    var formattedMinute = minute.toString().padStart(2, '0');
    return "".concat(formattedHour, ":").concat(formattedMinute, " ").concat(period);
};
