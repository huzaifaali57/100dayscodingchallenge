// Question 49
console.log("\n\tQuestion 49 Starts Here\t\n");
/*This code defines a function 'logHobbies' that takes any number of
hobbies as strings, loops through them, and logs each hobby with a
message saying "I enjoy [hobby]". Then, it calls the function*/
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
logHobbies("learning", "excercising", "reaching my goals");
// Question 50
console.log("\n\tQuestion 50 Starts Here\t\n");
/*This code defines a string variable 'myIdealDay' containing a
description of the ideal day with three activities listed, and
then logs this description to the console.*/
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
// Question 51
console.log("\n\tQuestion 51 Starts Here\t\n");
/*The code calculates the area of a rectangle using both a regular
function and an arrow function, then logs the result of the arrow
function with width 5 and height 7.*/
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
