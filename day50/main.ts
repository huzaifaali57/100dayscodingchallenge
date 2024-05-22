// Question 148
console.log("\n\tQuestion 148 Starts Here\t\n");
//This code schedules a message "This message is shown after delay of 2 seconds." 
//to be printed on the console after a 2 second delay using setTimeout.
setTimeout(() => {
  console.log("This message is shown after delay of 2 seconds.");
}, 2000);

// Question 149
console.log("\n\tQuestion 149 Starts Here\t\n");
//This code demonstrates that even though the callback is set with 0 delay, "Stop" 
//is printed before "Executed Callback" because the callback is asynchronous.
console.log("Start");
setTimeout(() => {
  console.log("Executed Callback");
}, 0);
console.log("Stop");

// Question 150
console.log("\n\tQuestion 150 Starts Here\t\n");
//This code demonstrates synchronous and asynchronous execution. The synchronous
//loop blocks the program before printing "After synchronous operation", while
//the asynchronous function runs independently and prints "Asynchronous operation
//completed" after a 1 second delay.
// Synchronous
console.log("Before synchronous operation");
for (let i = 0; i < 1e9; i++) {}
console.log("After synchronous operation");

// Asynchronous
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");