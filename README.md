# useGenerator

A reusable library for date, days, time, and calendar functions.

## Installation

```bash
npm install useGenerator
```

## Importing the Library

First, import the `useGenerator` function from the library:

```javascript
import { useGenerator } from 'useGenerator';
```

## Functions

### getCalendarDays

Generates an array of objects representing consecutive days starting from today.

**Parameters:**

- `daysToGenerate` (number): The number of days to generate. Default is 10.

**Returns:**

An array of objects, each containing a `date` (string) and a `day` (string).

**Example:**

```javascript
const { getCalendarDays } = useGenerator();
const days = getCalendarDays(7);
console.log(days);
// Output: [{ date: '2023-11-01', day: 'Wed' }, { date: '2023-11-02', day: 'Thu' }, ...]
```

### getHoursRange

Generates an array of time strings within a specified range and interval.

**Parameters:**

- `startHour` (number): The starting hour. Default is 0.
- `endHour` (number): The ending hour. Default is 23.
- `interval` (number): The interval in minutes. Default is 60.

**Returns:**

An array of time strings in the format `HH:mm`.

**Example:**

```javascript
const { getHoursRange } = useGenerator();
const hours = getHoursRange(9, 17, 30);
console.log(hours);
// Output: ['09:00', '09:30', '10:00', '10:30', ...]
```

### getYearRange

Generates an array of years within a specified range.

**Parameters:**

- `startYear` (number): The starting year. Default is the current year.
- `endYear` (number): The ending year. Default is 10 years from the current year.

**Returns:**

An array of years (numbers).

**Example:**

```javascript
const { getYearRange } = useGenerator();
const years = getYearRange(2020, 2025);
console.log(years);
// Output: [2020, 2021, 2022, 2023, 2024, 2025]
```

## When to Use

- **Date Generation:** When you need to generate a list of consecutive dates for a calendar or scheduling application.
- **Time Range Generation:** When you need to generate a list of time slots for booking or scheduling purposes.
- **Year Range Generation:** When you need to generate a list of years for a dropdown or selection input.

## Why Use useGenerator

- **Simplicity:** Provides simple and reusable functions for common date and time operations.
- **Flexibility:** Allows customization of the number of days, time intervals, and year ranges.
- **Efficiency:** Reduces the need for repetitive date and time manipulation code.
