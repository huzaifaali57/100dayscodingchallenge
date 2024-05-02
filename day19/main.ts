// Question 55
console.log("\n\tQuestion 55 Starts Here\t\n");
/*The code creates an array `doubledNumbers` by doubling 
each element of the array `numbers` and then logs the 
doubled numbers to the console.*/
let numbers = [5, 10, 15, 20, 25];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Question 56
console.log("\n\tQuestion 56 Starts Here\t\n");
/*The code creates an array `stringsArray` containing only string 
elements filtered from the `mixedArray`, then logs it to the console.*/
let mixedArray = [false, "bicycle", 76, "truck", true, "supercar"];
let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log(stringsArray);

// Question 57
console.log("\n\tQuestion 57 Starts Here\t\n");
/*The code calculates the average of grades in the `grades` array using 
the `reduce` method, then logs the average grade to the console.*/
let grades = [99, 65, 35, 87, 56, 72];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);