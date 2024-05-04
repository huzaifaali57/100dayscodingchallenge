// Question 64
console.log("\n\tQuestion 64 Starts Here\t\n");
/*The provided code defines a function combineStringAndNumber that 
concatenates a string and a number, then calls the function with "Age: "*/
function combineStringAndNumber(text: string, number: number): string {
  return text + number;
}
console.log(combineStringAndNumber("Age: ", 20));

// Question 65
console.log("\n\tQuestion 65 Starts Here\t\n");
/*This code defines a function remainder that calculates the remainder 
of dividing two numbers and then calls the function to find the 
remainder of 5 divided by 2, printing the result.*/
function remainder(num1: number, num2: number): number {
  return num1 % num2;
}
console.log(remainder(15, 4));

// Question 66
console.log("\n\tQuestion 66 Starts Here\t\n");
/* this code defines a function checkBothTrue that checks if two 
boolean values are both true and returns the result, then calls 
the function with true and false to log false.*/
function checkBothTrue(val1: boolean, val2: boolean): boolean {
  return val1 && val2;
}
console.log(checkBothTrue(true, false));
