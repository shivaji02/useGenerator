"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredData = void 0;
var filter_1 = require("./filter");
var getFilteredData = function (data, filter, sortField, isAsc) {
    if (sortField === void 0) { sortField = 'default'; }
    if (isAsc === void 0) { isAsc = true; }
    var filteredData = (0, filter_1.applyFilter)(data, filter);
    return filteredData.sort(function (a, b) {
        var valA = a[sortField];
        var valB = b[sortField];
        return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
};
exports.getFilteredData = getFilteredData;
