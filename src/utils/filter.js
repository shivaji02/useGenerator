"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFilter = exports.filters = void 0;
exports.filters = {
    A: function (item) { return item.A; },
    B: function (item) { return item.B; },
    C: function (item) { return item.C; },
    default: function () { return true; }
};
var applyFilter = function (data, filter) {
    var filterFunction = exports.filters[filter] || exports.filters.default;
    return data.filter(filterFunction);
};
exports.applyFilter = applyFilter;
