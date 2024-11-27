import useGenerator from './useGenerator';

const { getCalendarDays, getHoursRange, getYearRange, formatDate, getCurrentTime } = useGenerator();

// Test getCalendarDays
const calendarDays = getCalendarDays(7);
console.log('Calendar Days:', calendarDays);

// Test getHoursRange
const hoursRange = getHoursRange(9, 17, 30);
console.log('Hours Range:', hoursRange);

// Test getYearRange
const yearRange = getYearRange(2020, 2025);
console.log('Year Range:', yearRange);

// Test formatDate
const formattedDate = formatDate(new Date());
console.log('Formatted Date:', formattedDate);

// Test getCurrentTime
const currentTime = getCurrentTime();
console.log('Current Time:', currentTime);
console.log("hello");