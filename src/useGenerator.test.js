"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_test_1 = require("node:test");
var expect_1 = require("expect");
var useGenerator_1 = require("./useGenerator");
(0, node_test_1.default)('getCalendarDays generates correct number of days', function () {
    var days = (0, useGenerator_1.getCalendarDays)(7);
    (0, expect_1.expect)(days).toHaveLength(7);
});
(0, node_test_1.default)('getHoursRange generates correct number of hours', function () {
    var hours = (0, useGenerator_1.getHoursRange)(7);
    (0, expect_1.expect)(hours).toHaveLength(7);
});
