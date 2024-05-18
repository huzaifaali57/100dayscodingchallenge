"use strict";
// Import File
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilTwo = exports.utilOne = exports.Person = exports.add = void 0;
// Question 130
var add = function (a, b) { return a + b; };
exports.add = add;
// Question 131
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
// Question 132
var utilOne = function () {
    /*...*/
};
exports.utilOne = utilOne;
var utilTwo = function () {
    /*...*/
};
exports.utilTwo = utilTwo;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
exports.default = Calculator;
