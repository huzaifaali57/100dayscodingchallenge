// Question 145
console.log("\n\tQuestion 145 Starts Here\t\n");
//The code defines a function that calls another function with arguments 
//and logs the sum of those arguments.
function executeCallback(
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2);
}
const add = (a: number, b: number) => {
  console.log(a + b);
};
executeCallback(add, 5, 3);

// Question 146
console.log("\n\tQuestion 146 Starts Here\t\n");
//This code creates an array of numbers greater than 5 by filtering the original array.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
console.log(filteredNumbers);

// Question 147
console.log("\n\tQuestion 147 Starts Here\t\n");
//This code simulates fetching data with a callback, logging an error message if it 
//fails or the data itself if successful.
function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  if (Math.random() > 0.5) {
    callback(null, data);
  } else {
    callback(error);
  }
}
fetchData((error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
});