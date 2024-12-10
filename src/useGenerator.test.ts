import test, { describe } from 'node:test';
import { getCalendarDays, getHoursRange, getYearRange, getFilteredData } from './useGenerator';
import {expect} from 'expect';
describe('useGenerator tests', () => {
  test('getCalendarDays generates correct number of days', () => {
    const days = getCalendarDays(5);
    expect(days).toHaveLength(5);
    expect(days[0]).toHaveProperty('date');
    expect(days[0]).toHaveProperty('day');
    expect(days[0]).toHaveProperty('daysToGenerate');
  });

  test('getHoursRange generates correct range of hours', () => {
    const hours = getHoursRange(9, 17, 30); // Ensure correct arguments are passed
    expect(hours).toContain('09:00 AM');
    expect(hours).toContain('09:30 AM');
    expect(hours).toContain('10:00 AM');
  });

  test('getYearRange generates correct range of years', () => {
    const years = getYearRange(2000, 2005);
    expect(years).toEqual([2000, 2001, 2002, 2003, 2004, 2005]);
  });

});