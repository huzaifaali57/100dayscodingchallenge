// Question 76
console.log("\n\tQuestion 76 Starts Here\t\n");
/*The above code defines a function addNumbers that takes two
numbers as input, adds them together, and prints the sum.*/
function addNumbers(num1, num2) {
    // Calculates the sum of num1 and num2
    return num1 + num2;
}
console.log(addNumbers(11, 219));
// Question 77
console.log("\n\tQuestion 77 Starts Here\t\n");
/*Absolutely, this code defines a function called
greetUser that welcomes a user by name, using "anonymous"
as a default if no name is provided.*/
function greetUser(name) {
    if (name === void 0) { name = "anonymous user"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Huzaifa Ali");
greetUser();
// Question 78
console.log("\n\tQuestion 78 Starts Here\t\n");
/*This code defines two square functions, one declared
(squareDeclaration) and another as an expression (squareExpression),
both returning the square of a number.*/
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(8));
console.log(squareExpression(8));
