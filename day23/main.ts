// Question 67
console.log("\n\tQuestion 67 Starts Here\t\n");
/*This code defines a function addNumberAndString that converts a string 
number to a number and adds it to another number, then calls the function 
with 42 and '3' to print 45*/
function addNumberAndString(number1: number, numberString: string): number {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(42, "3"));

// Question 68
console.log("\n\tQuestion 68 Starts Here\t\n");
/*this code defines a function multiplyDecimals that multiplies two numbers, 
rounds the product to two decimal places using rounding, and returns the result. 
It then calls the function with 1.7 and 2.3 to print a value around 3.91.*/
function multiplyDecimals(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(1.7, 2.3));

// Question 69
console.log("\n\tQuestion 69 Starts Here\t\n");
/*This code defines a function divideAndRemainder that calculates the 
quotient and remainder of dividing two numbers and returns them as an object, 
then calls the function with 10 and 3 to print { quotient: 3, remainder: 1 }.*/
function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3));