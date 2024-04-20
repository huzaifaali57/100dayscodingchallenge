// Question 34
console.log("\n\tQuestion 34 Starts Here\t\n");
let pizzas = ["fajita", "tikka", "peperonni"];
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza`);
}
console.log("I like every flavor of pizza");
console.log(`Mostly ${pizzas[0]} and ${pizzas[1]} are my favorites`);
console.log(`Not sure about the ${pizzas[2]} flavor of pizza`);
console.log("I really love pizza.");

// Question 35
console.log("\n\tQuestion 35 Starts Here\t\n");
const animals = ["Dog", "Cat", "Rabbit"];
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// Question 36
console.log("\n\tQuestion 36 Starts Here\t\n");
function make_shirt(size, message) {
  console.log(
    `The T-shirt size is ${size} and the message printed on it is: "${message}".`
  );
}
// Calling the function
make_shirt("Large", "Hello, World!");
