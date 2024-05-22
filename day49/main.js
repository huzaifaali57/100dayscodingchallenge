// Question 145
console.log("\n\tQuestion 145 Starts Here\t\n");
//The code defines a function that calls another function with arguments 
//and logs the sum of those arguments.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 5, 3);
// Question 146
console.log("\n\tQuestion 146 Starts Here\t\n");
//This code creates an array of numbers greater than 5 by filtering the original array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
// Question 147
console.log("\n\tQuestion 147 Starts Here\t\n");
//This code simulates fetching data with a callback, logging an error message if it 
//fails or the data itself if successful.
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
