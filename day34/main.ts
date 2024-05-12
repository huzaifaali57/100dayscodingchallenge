// Question 100
console.log("\n\tQuestion 100 Starts Here\t\n");
/*This line of code declares a constant named squareRoot and 
assigns it the square root of 144, then prints the result.*/
const squareRoot: number = Math.sqrt(144);
console.log(squareRoot);

// Question 101
console.log("\n\tQuestion 101 Starts Here\t\n");
/*This code defines a function generating a random integer between 
1 and 10 (inclusive) and then calls it to print a random result.*/
function getRandomInt(): number {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt());

// Question 102
console.log("\n\tQuestion 102 Starts Here\t\n");
/*This code calculates the absolute value of the difference between -5 
and -5 (which is 0) and stores it in a constant variable named difference.*/
const difference: number = Math.abs(-5 - 5);
console.log(difference);