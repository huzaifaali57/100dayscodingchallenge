var _this = this;
// Question 127
console.log("\n\tQuestion 127 Starts Here\t\n");
/*This code defines two functions, one traditional and one an arrow function, that both add
two numbers and then prints the results of calling those functions with inputs 5 and 3.*/
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));
// Question 128
console.log("\n\tQuestion 128 Starts Here\t\n");
/*This code defines an arrow function 'multiplyParameters' that takes in an arbitrary number
of numbers and returns their product using reduce.*/
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4));
// Question 129
console.log("\n\tQuestion 129 Starts Here\t\n");
/*This code defines an object with traditional and arrow functions that demonstrate the
 behavior of the 'this' keyword.*/
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
