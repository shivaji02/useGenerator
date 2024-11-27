/**
 * Polyfill for String.prototype.padStart
 * Ensures compatibility with environments that don't support `padStart`.
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength: number, padString: string = ' '): string {
    targetLength = Math.floor(targetLength); // Ensure integer
    padString = String(padString || ' ');
    if (this.length >= targetLength) {
      return String(this);
    }
    return padString.repeat(Math.max(0, targetLength - this.length)).slice(0, targetLength - this.length) + String(this);
  };
}

/**
 * useGenerator Utility
 * Provides utility functions for generating days, hours, and years, along with formatting and time utilities.
 */
export const useGenerator = () => {
  /**
   * Generate calendar days from the current day or a specific start date.
   * @param daysToGenerate - Number of days to generate (default: 10).
   * @returns Array of dates with formatted day and date.
   */
  const getCalendarDays = (daysToGenerate: number = 10): { date: string; day: string }[] => {
    const days: { date: string; day: string }[] = [];
    const today = new Date();

    for (let i = 0; i < daysToGenerate; i++) {
      const currentDate = new Date(today.getTime());
      currentDate.setDate(today.getDate() + i);
      const formattedDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' }); // Day: Mon, Tue, etc.
      days.push({ date: formattedDate, day });
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
  const getHoursRange = (startHour: number = 0, endHour: number = 23, interval: number = 60): string[] => {
    const hours: string[] = [];
    for (let i = startHour; i <= endHour; i++) {
      for (let j = 0; j < 60; j += interval) {
        const hour = i.toString().padStart(2, '0'); // Ensure 2-digit hours
        const minute = j.toString().padStart(2, '0'); // Ensure 2-digit minutes
        hours.push(`${hour}:${minute}`);
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
  const getYearRange = (startYear: number = new Date().getFullYear(), endYear: number = new Date().getFullYear() + 10): number[] => {
    const years: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
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
  const formatDate = (
    date: Date,
    options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  ): string => {
    return date.toLocaleDateString('en-US', options);
  };

  /**
   * Get the current time in HH:mm:ss format.
   * @returns Current time string.
   */
  const getCurrentTime = (): string => {
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

export default useGenerator;
