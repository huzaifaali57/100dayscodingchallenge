// Question 73
console.log("\n\tQuestion 73 Starts Here\t\n");
/*this code defines a function updateVariable that demonstrates variable 
modification within the function's scope. It creates a number variable 
with the value 20, logs it, updates the value to 52, and then logs it*/
function updateVariable() {
    let number = 20;
    console.log("Initial value:", number);

    number = 52;
    console.log("Updated value:", number);
}
updateVariable();

// Question 74
console.log("\n\tQuestion 74 Starts Here\t\n");
/*This code defines a function swapValues that utilizes a temporary 
variable to swap the values of two variables (a and b) and logs the 
values before and after the swap.*/
function swapValues() {
    let a = 15, b = 11;
    console.log("Before swap: a =", a, "b =", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a =", a, "b =", b);
}
swapValues();

// Question 75
console.log("\n\tQuestion 75 Starts Here\t\n");
/*This code demonstrates compound assignment operators performing 
operations and assignments on x in a single step and logging the results.*/
function useCompoundOperators() {
    let x = 5;
    console.log("Initial x:", x);
    x += 3;
    console.log("After addition:", x);
    x -= 2;
    console.log("After subtraction:", x);
    x *= 3;
    console.log("After multiplication:", x);
    x /= 2;
    console.log("After division:", x);
}
useCompoundOperators();