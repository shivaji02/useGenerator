"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var node_test_1 = __importStar(require("node:test"));
var useGenerator_1 = require("./useGenerator");
var expect_1 = require("expect");
(0, node_test_1.describe)('useGenerator tests', function () {
    (0, node_test_1.default)('getCalendarDays generates correct number of days', function () {
        var days = (0, useGenerator_1.getCalendarDays)(5);
        (0, expect_1.expect)(days).toHaveLength(5);
        (0, expect_1.expect)(days[0]).toHaveProperty('date');
        (0, expect_1.expect)(days[0]).toHaveProperty('day');
        (0, expect_1.expect)(days[0]).toHaveProperty('daysToGenerate');
    });
    (0, node_test_1.default)('getHoursRange generates correct range of hours', function () {
        var hours = (0, useGenerator_1.getHoursRange)(9, 17, 30); // Ensure correct arguments are passed
        (0, expect_1.expect)(hours).toContain('09:00 AM');
        (0, expect_1.expect)(hours).toContain('09:30 AM');
        (0, expect_1.expect)(hours).toContain('10:00 AM');
    });
    (0, node_test_1.default)('getYearRange generates correct range of years', function () {
        var years = (0, useGenerator_1.getYearRange)(2000, 2005);
        (0, expect_1.expect)(years).toEqual([2000, 2001, 2002, 2003, 2004, 2005]);
    });
});
