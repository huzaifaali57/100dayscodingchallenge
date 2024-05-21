// Question 142
console.log("\n\tQuestion 142 Starts Here\t\n");
//This code creates a promise that resolves to "Hello, World!" after 2
//seconds, then logs the resolved message.
const helloPromise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});
helloPromise.then((message) => console.log(message));

// Question 143
console.log("\n\tQuestion 143 Starts Here\t\n");
//This code creates a promise that randomly resolves to "Success!" or rejects with a
//"Failure" error, then logs the result or error message.
const conditionalPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject(new Error("Failure"));
  }
});
conditionalPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// Question 144
console.log("\n\tQuestion 144 Starts Here\t\n");
//This code waits for all three promises (a resolved value, a number, and a delayed string)
//to settle, then logs their resolved values as an array.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});