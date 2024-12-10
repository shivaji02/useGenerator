import { daysToGenerateT } from "../types";

/**
 * Generates a list of days to be used in the calendar starting from today
 * @param daysToGenerate 
 * @returns Array of calender day objects.
 */

// This function generates a list of days to be used in the calendar
  export const getCalendarDays =(daysToGenerate : number = 10): daysToGenerateT[] =>{
        const days: daysToGenerateT[] = [];
        const today = new Date();

        for (let i = 0; i < daysToGenerate; i++) {
            
            const currentDate = new Date(today.getTime());
            currentDate.setDate(today.getDate()+i);
            const formattedDate = currentDate.toISOString().split('T')[0];
            const day = currentDate.toLocaleDateString('en-US',{weekday:'short'});
            const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
            const date = currentDate.getDate();
            days.push({
                date: formattedDate,
                day,
                dayOfMonth: date,
                daysToGenerate,
                month,
            });
        }
        return days;

    };

    /**
     * Extracts the weekdays  in numbers from the generated days.
     * @param days Array of calender day objects.
     * @returns Array of weekday strings.
     */


      const extractWeekdays = (days: daysToGenerateT[])=>{
        return days.map(day => day.day);
     };

     /**
      * Extracts the month from the calender day object.
      * @param days Array of calender day objects.
      * @returns Array of month strings.
      */
      const extractMonths  = (days:daysToGenerateT[])=>{
        return days.map(day =>  day.month);
     };
     

        /**
        * Extracts days of the month from the geneated days.
        * @param days Array of calender day objects.
        * @returns Array of day of  the month numbers.
        */

         const extractDates = (days:daysToGenerateT[])=>{
            return days.map(day => day.dayOfMonth);
        }

export const extractors = {
    extractWeekdays,
    extractMonths,
    extractDates,
};