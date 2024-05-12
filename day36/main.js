// Question 106
console.log("\n\tQuestion 106 Starts Here\t\n");
/*This code defines a function isLeapYear that checks if a year is a leap
year based on standard rules and then calls it to check the years 2021
and 1875 (which are not leap years).*/
function isLeapYear(year) {
    // Checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2021));
console.log(isLeapYear(1875));
// Question 107
console.log("\n\tQuestion 107 Starts Here\t\n");
/*This code defines a function isDivisibleByTwoAndThree that checks if a number
is divisible by both 2 and 3 using the modulo operator and returns true if both
conditions are met, and calls it to check 17 (not divisible) and 6 (divisible).*/
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(17));
console.log(isDivisibleByTwoAndThree(6));
// Question 108
console.log("\n\tQuestion 108 Starts Here\t\n");
/*This code defines a function areStringsEqualIgnoreCase that checks if two strings
are equal after converting them to lowercase and returns true if they match.*/
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("HUZAIFA", "huzaifa"));
console.log(areStringsEqualIgnoreCase("rich", "RiCh"));
