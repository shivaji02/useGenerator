import { applyFilter } from "./filter"
export const getFilteredData = (
    data: any[], 
    filter: string,
    sortField: string = 'default',
    isAsc : boolean = true
): any[] => {
const filteredData = applyFilter(data, filter);
return filteredData.sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];
    return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
});

};