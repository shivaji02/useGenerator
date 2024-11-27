"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useGenerator_1 = require("./useGenerator");
var _a = (0, useGenerator_1.default)(), getCalendarDays = _a.getCalendarDays, getHoursRange = _a.getHoursRange, getYearRange = _a.getYearRange, formatDate = _a.formatDate, getCurrentTime = _a.getCurrentTime;
// Test getCalendarDays
var calendarDays = getCalendarDays(7);
console.log('Calendar Days:', calendarDays);
// Test getHoursRange
var hoursRange = getHoursRange(9, 17, 30);
console.log('Hours Range:', hoursRange);
// Test getYearRange
var yearRange = getYearRange(2020, 2025);
console.log('Year Range:', yearRange);
// Test formatDate
var formattedDate = formatDate(new Date());
console.log('Formatted Date:', formattedDate);
// Test getCurrentTime
var currentTime = getCurrentTime();
console.log('Current Time:', currentTime);
console.log("hello");
