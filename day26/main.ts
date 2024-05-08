// Question 76
console.log("\n\tQuestion 76 Starts Here\t\n");
/*The above code defines a function addNumbers that takes two 
numbers as input, adds them together, and prints the sum.*/
function addNumbers(num1: number, num2: number): number {
    // Calculates the sum of num1 and num2
    return num1 + num2;
}
console.log(addNumbers(11, 219));

// Question 77
console.log("\n\tQuestion 77 Starts Here\t\n");
/*Absolutely, this code defines a function called 
greetUser that welcomes a user by name, using "anonymous" 
as a default if no name is provided.*/
function greetUser(name: string = "anonymous user") {
    console.log(`Hello, ${name}!`);
}
greetUser("Huzaifa Ali");
greetUser();

// Question 78
console.log("\n\tQuestion 78 Starts Here\t\n");
/*This code defines two square functions, one declared 
(squareDeclaration) and another as an expression (squareExpression), 
both returning the square of a number.*/
function squareDeclaration(number: number): number {
    return number * number;
}
const squareExpression = function(number: number): number {
    return number * number;
};
console.log(squareDeclaration(8));
console.log(squareExpression(8));