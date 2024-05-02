// Question 55
console.log("\n\tQuestion 55 Starts Here\t\n");
/*The code creates an array `doubledNumbers` by doubling
each element of the array `numbers` and then logs the
doubled numbers to the console.*/
var numbers = [5, 10, 15, 20, 25];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubledNumbers);
// Question 56
console.log("\n\tQuestion 56 Starts Here\t\n");
/*The code creates an array `stringsArray` containing only string
elements filtered from the `mixedArray`, then logs it to the console.*/
var mixedArray = [false, "bicycle", 76, "truck", true, "supercar"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
// Question 57
console.log("\n\tQuestion 57 Starts Here\t\n");
/*The code calculates the average of grades in the `grades` array using
the `reduce` method, then logs the average grade to the console.*/
var grades = [99, 65, 35, 87, 56, 72];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
