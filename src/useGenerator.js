"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGenerator = void 0;
const useGenerator = () => {
    const getCalendarDays = (daysToGenerate = 10) => {
        const days = [];
        const today = new Date();
        today.setDate(today.getDate()); //generates from current day 
        //   today.setDate(today.getDate() - 1); //genertes from yesterday
        for (let i = 0; i < daysToGenerate; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const formattedDate = currentDate.toISOString().split('T')[0];
            const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
            days.push({ date: formattedDate, day });
        }
        return days;
    };
    const getHoursRange = (startHour = 0, endHour = 23, interval = 60) => {
        const hours = [];
        for (let i = startHour; i <= endHour; i++) {
            for (let j = 0; j < 60; j += interval) {
                const hour = i.toString().padStart(2, '0');
                const minute = j.toString().padStart(2, '0');
                hours.push(`${hour}:${minute}`);
            }
        }
        return hours;
    };
    const getYearRange = (startYear = new Date().getFullYear(), endYear = new Date().getFullYear() + 10) => {
        const years = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year);
        }
        return years;
    };
    const formatDate = (date, options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) => {
        return date.toLocaleDateString('en-US', options);
    };
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
    return {
        getCalendarDays,
        getHoursRange,
        getYearRange,
        formatDate,
        getCurrentTime,
    };
};
exports.useGenerator = useGenerator;
exports.default = exports.useGenerator;
