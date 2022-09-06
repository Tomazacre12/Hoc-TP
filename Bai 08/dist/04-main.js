"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositive = void 0;
function isPositive(n) {
    return n >= 0;
}
exports.isPositive = isPositive;
try {
    Promise.reject(new Error('Super'));
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}
