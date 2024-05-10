// Question 88
console.log("\n\tQuestion 88 Starts Here\t\n");
/*This code defines a function to round a number to the
nearest integer and prints the results for 4.2 and 2.9.*/
function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.2));
console.log(roundToNearestInteger(2.9));
// Question 89
console.log("\n\tQuestion 89 Starts Here\t\n");
/*This code defines a function to convert a string to a number
(including decimals with parseFloat) and prints the conversions
of "100.29" and "45".*/
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("100.29"));
console.log(convertStringToNumber("45"));
// Question 90
console.log("\n\tQuestion 90 Starts Here\t\n");
/*This code checks if a value is Not a Number (NaN).*/
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("what"));
console.log(isValueNaN(456));
