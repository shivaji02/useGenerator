import { hoursToGenerateT } from "../types";

export const getHoursRange = (
    startHour = 0,
    endHour = 24,
    interval = 1,
    format: '24-hour' | '12-hour' = '12-hour'
): string[] => {
    const hours: string[] = [];
    for (let i = startHour; i <= endHour; i++) {
        for (let j = 0; j < 60; j += interval) {
            const hour = i.toString().padStart(2, '0');
            const minute = j.toString().padStart(2, '0');
            if (format === '24-hour') {
                hours.push(`${hour}:${minute}`);
            } else {
                hours.push(convertToAmPm(i, j));
            }
        }
    }
    return hours;
};
export const getFormattedHours = (
    startHour = 0,
    endHour = 24,
    interval = 1,
    format: '24-hour' | '12-hour' = '12-hour'
): string[] => {
    return getHoursRange(startHour, endHour, interval, format);
};
/**
 * Convert 24-hour time to 12-hour time with AM/PM.
 * @param hour - Hour in 24-hour format.
 * @param minute - Minute.
 * @returns Time in 12-hour format with AM/PM.
 */
const convertToAmPm = (hour: number, minute: number): string => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
    const formattedHour = adjustedHour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute} ${period}`;
};
