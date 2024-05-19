// Question 136
console.log("\n\tQuestion 136 Starts Here\t\n");
//This code iterates from 1 to 5 and prints each iteration number and value.
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}, i value:, i`);
}

// Question 137
console.log("\n\tQuestion 137 Starts Here\t\n");
//This code attempts to throw an error and then logs the error message 
//("Something went wrong").
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
}

// Question 138
console.log("\n\tQuestion 138 Starts Here\t\n");
//This code simulates a breakpoint with messages printed before, during 
//(paused state), and after the breakpoint in the browser's developer tools.
console.log("Before breakpoint");
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");