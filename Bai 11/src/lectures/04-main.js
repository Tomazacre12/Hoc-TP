"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
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
var leNarr = {
    id: 1,
    name: 'Le Narr',
    age: 18,
    gender: 'gay'
};
// OLD WAY
var ids = leNarr.id;
var names = leNarr.name;
// NEW WAY
var id = leNarr.id, name = leNarr.name;
// OLD WAY
var id2 = leNarr.id;
var restOld = {
    name: leNarr.name,
    age: leNarr.age,
    gender: leNarr.gender
};
// NEW WAY WITH REST OPERATOR
var rest = __rest(leNarr
// clone object with spread operator
, []);
// clone object with spread operator
var bob1 = {
    id: 1,
    name: 'Bob 1',
    age: 18,
    gender: 'male'
};
var bob2 = __assign(__assign({}, bob1), { name: 'Bob 2' });
bob1 === bob2; // false
var fullName = 'EzFrontecd';
var wordList = fullName.split(' ');
// OLD WAY
var firstName = wordList[0];
var lastName = wordList[1];
var studentList = [
    { id: 1, name: 'Alice', age: 21, gender: 'female' },
    { id: 2, name: 'Patchouli', age: 22, gender: 'female' }
];
var newList = __spreadArray([], studentList, true);
newList[0].name = 'Alice Shanghai';
console.log(studentList[0].name); // Alice Shanghai
