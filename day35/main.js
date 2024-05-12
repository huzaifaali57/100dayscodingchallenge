// Question 103
console.log("\n\tQuestion 103 Starts Here\t\n");
/*This code defines a function that will always return false because Math.random()
generates a value between 0 and 1 (exclusive), so it can never be greater than 15.*/
function getRandomBoolean() {
    return Math.random() > 15;
}
console.log(getRandomBoolean());
// Question 104
console.log("\n\tQuestion 104 Starts Here\t\n");
/*This code defines a function getRandomHexColor that generates a random six-digit
hexadecimal color code by converting a random integer to a hex string with padding zeros.*/
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
// Question 105
console.log("\n\tQuestion 105 Starts Here\t\n");
/*This code defines a function rollDice that simulates a six-sided die roll by generating a
random number between 1 and 6 (inclusive) and returning it.*/
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
