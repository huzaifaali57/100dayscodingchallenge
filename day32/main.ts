// Question 94
console.log("\n\tQuestion 94 Starts Here\t\n");
/*This line creates an array of word lengths by mapping 
over an array of strings.*/
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths: number[] = words.map(word => word.length);
console.log(lengths);


// Question 95
console.log("\n\tQuestion 95 Starts Here\t\n");
/*This code filters elements from a number array that are greater than 10.*/
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numberss: number[] = [55,11,92,10,5];
console.log(filterGreaterThanTen(numberss));


// Question 96
console.log("\n\tQuestion 96 Starts Here\t\n");
/*This function uses reduce to sum all elements in a number array.*/
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers: number[] = [55,11,92,10,5];
console.log(calculateSum(numbers));