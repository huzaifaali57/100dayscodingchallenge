// Question 94
console.log("\n\tQuestion 94 Starts Here\t\n");
/*This line creates an array of word lengths by mapping
over an array of strings.*/
var words = ["Hello", "World", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
// Question 95
console.log("\n\tQuestion 95 Starts Here\t\n");
/*This code filters elements from a number array that are greater than 10.*/
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numberss = [55, 11, 92, 10, 5];
console.log(filterGreaterThanTen(numberss));
// Question 96
console.log("\n\tQuestion 96 Starts Here\t\n");
/*This function uses reduce to sum all elements in a number array.*/
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [55, 11, 92, 10, 5];
console.log(calculateSum(numbers));
