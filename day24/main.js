// Question 70
console.log("\n\tQuestion 70 Starts Here\t\n");
/*this code defines a function printNumbersWithLet that
uses a for loop with let to iterate from 1 to 5 and
prints each number within the loop.*/
function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet();
// Question 71
console.log("\n\tQuestion 71 Starts Here\t\n");
/*This code demonstrates the difference between let and const
in JavaScript: it defines an age (changeable) that's updated
to 26 and a name (constant) that triggers an error when reassigned.*/
var age = 25;
age = 26;
console.log(age);
var name = "Alice";
try {
    name = "Bob";
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
// Question 72
console.log("\n\tQuestion 72 Starts Here\t\n");
/*This code shows block-level scope for variables in JavaScript.
'blockLet' (let) and 'blockConst' (const) are defined within a
block and are not accessible outside.*/
{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
