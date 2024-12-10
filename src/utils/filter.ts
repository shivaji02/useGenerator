// export const applyFilter = (data: any[], filter: string): any[] => {
//     return data.filter((item)=>{
//         if(filter === 'A'){
//             return item.A;
//         }
//         if(filter === 'B'){
//             return item.B;
//         }
//         if(filter === 'C'){
//             return item.C;
//         }
//         return true;
//     });
// }


type FilterKeys = 'A' | 'B' | 'C' | 'default';

export const filters: Record<FilterKeys, (item: any) => any> = {
    A: (item: any) => item.A,
    B: (item: any) => item.B,
    C: (item: any) => item.C,
    default: () => true
};
export const applyFilter = (data: any[], filter: string): any[] => {
    const filterFunction = filters[filter as FilterKeys] || filters.default;
    return data.filter(filterFunction);
};