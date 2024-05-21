// Question 139
console.log("\n\tQuestion 139 Starts Here\t\n");
// Reserved word : let
let count = 7;
// Reserved word : if
if (count > 5) {
  console.log("Count is greater than 0.");
}
// Reserved word : return
function add(a, b) {
  return a + b;
}

// Question 140
console.log("\n\tQuestion 140 Starts Here\t\n");
// Using a reserved word as variable name
// const for = 5; // Syntax Error
console.log("Using reserved word as a variable name causes a syntax error");

// Question 141
console.log("\n\tQuestion 141 Starts Here\t\n");
/*This code defines an asynchronous function fetchData that waits for data 
to be fetched before logging it, then explains this behavior in a comment.*/
async function fetchData() {
  const data = await fetchSomething();
  console.log(data);
}
console.log("Await turns asynchronous promises into linear-looking code.");
