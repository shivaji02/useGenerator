# useGenerator

A reusable library for date, days, time, and calendar functions.

## Installation

```bash
npm install @usegenerator/usegenerator```

## Importing the Library

First, import the `useGenerator` function from the library:

```javascript
import { useGenerator } from 'useGenerator';
```

## Functions

### getCalendarDays

Generates an array of objects representing consecutive days starting from today.

Parameters:

- `daysToGenerate` (number): The number of days to generate. Default is 10.

Returns:

An array of objects, each containing a `date` (string) and a `day` (string).

Example:

```javascript
const { getCalendarDays } = useGenerator();
const days = getCalendarDays(7);
console.log(days);
// Output: [{ date: '2023-11-01', day: 'Wed' }, { date: '2023-11-02', day: 'Thu' }, ...]
```

### getHoursRange

Generates an array of time strings within a specified range and interval.

Parameters:

- `startHour` (number): The starting hour. Default is 0.
- `endHour` (number): The ending hour. Default is 23.
- `interval` (number): The interval in minutes. Default is 60.

Returns:

An array of time strings in the format `HH:mm`.

Example:

```javascript
const { getHoursRange } = useGenerator();
const hours = getHoursRange(9, 17, 30);
console.log(hours);
// Output: ['09:00', '09:30', '10:00', '10:30', ...]
```

### getYearRange

Generates an array of years within a specified range.

Parameters:

- `startYear` (number): The starting year. Default is the current year.
- `endYear` (number): The ending year. Default is 10 years from the current year.

Returns:

An array of years (numbers).

Example:

```javascript
const { getYearRange } = useGenerator();
const years = getYearRange(2020, 2025);
console.log(years);
// Output: [2020, 2021, 2022, 2023, 2024, 2025]
```

### extractDates

Extracts specific dates from an array of date objects.

Parameters:

- `dates` (array): An array of date objects.
- `criteria` (function): A function to filter the dates.

Returns:

An array of filtered date objects.

Example:

```javascript
const { extractDates } = useGenerator();
const dates = getCalendarDays(10);
const weekends = extractDates(dates, date => date.day === 'Sat' || date.day === 'Sun');
console.log(weekends);
// Output: [{ date: '2023-11-04', day: 'Sat' }, { date: '2023-11-05', day: 'Sun' }, ...]
```

### sortDates

Sorts an array of date objects.

Parameters:

- `dates` (array): An array of date objects.
- `order` (string): The order to sort by ('asc' or 'desc'). Default is 'asc'.

Returns:

A sorted array of date objects.

Example:

```javascript
const { sortDates } = useGenerator();
const dates = getCalendarDays(10);
const sortedDates = sortDates(dates, 'desc');
console.log(sortedDates);
// Output: [{ date: '2023-11-10', day: 'Fri' }, { date: '2023-11-09', day: 'Thu' }, ...]
```

### filterHours

Filters an array of time strings based on a criteria.

Parameters:

- `hours` (array): An array of time strings.
- `criteria` (function): A function to filter the hours.

Returns:

An array of filtered time strings.

Example:

```javascript
const { filterHours } = useGenerator();
const hours = getHoursRange(0, 23, 30);
const morningHours = filterHours(hours, hour => parseInt(hour.split(':')[0]) < 12);
console.log(morningHours);
// Output: ['00:00', '00:30', '01:00', '01:30', ...]
```

## When to Use

- Date Generation: When you need to generate a list of consecutive dates for a calendar or scheduling application.
- Time Range Generation: When you need to generate a list of time slots for booking or scheduling purposes.
- Year Range Generation: When you need to generate a list of years for a dropdown or selection input.
- Date Extraction: When you need to filter specific dates from a list.
- Date Sorting: When you need to sort dates in ascending or descending order.
- Hour Filtering: When you need to filter specific time slots from a list.

## Why Use useGenerator

- Simplicity: Provides simple and reusable functions for common date and time operations.
- Flexibility: Allows customization of the number of days, time intervals, and year ranges.
- Efficiency: Reduces the need for repetitive date and time manipulation code.
- Versatility: Offers additional functions for extracting, sorting, and filtering dates and times.

