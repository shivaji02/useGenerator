export const useGenerator = () => {
    const getCalendarDays = (daysToGenerate: number = 10): { date: string; day: string }[] => {
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
  
    const getHoursRange = (startHour: number = 0, endHour: number = 23, interval: number = 60): string[] => {
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
  
    const getYearRange = (startYear: number = new Date().getFullYear(), endYear: number = new Date().getFullYear() + 10): number[] => {
      const years = [];
      for (let year = startYear; year <= endYear; year++) {
        years.push(year);
      }
      return years;
    };
  
    const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }): string => {
      return date.toLocaleDateString('en-US', options);
    };
  
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
  