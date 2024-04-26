// Question 49
console.log("\n\tQuestion 49 Starts Here\t\n");
/*This code defines a function 'logHobbies' that takes any number of 
hobbies as strings, loops through them, and logs each hobby with a 
message saying "I enjoy [hobby]". Then, it calls the function*/
function logHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("learning", "excercising", "reaching my goals");

// Question 50
console.log("\n\tQuestion 50 Starts Here\t\n");
/*This code defines a string variable 'myIdealDay' containing a 
description of the ideal day with three activities listed, and 
then logs this description to the console.*/
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;
console.log(myIdealDay);

// Question 51
console.log("\n\tQuestion 51 Starts Here\t\n");
/*The code calculates the area of a rectangle using both a regular 
function and an arrow function, then logs the result of the arrow 
function with width 5 and height 7.*/
function calculateArea(width: number, height: number): number {
    return width * height;
}
let calculateAreaArrow = (width: number, height: number): number => width * height;
console.log(calculateAreaArrow(5, 7));