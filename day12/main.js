// Question 34
console.log("\n\tQuestion 34 Starts Here\t\n");
var pizzas = ["fajita", "tikka", "peperonni"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza"));
}
console.log("I like every flavor of pizza");
console.log("Mostly ".concat(pizzas[0], " and ").concat(pizzas[1], " are my favorites"));
console.log("Not sure about the ".concat(pizzas[2], " flavor of pizza"));
console.log("I really love pizza.");
// Question 35
console.log("\n\tQuestion 35 Starts Here\t\n");
var animals = ["Dog", "Cat", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// Question 36
console.log("\n\tQuestion 36 Starts Here\t\n");
function make_shirt(size, message) {
    console.log("The T-shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Calling the function
make_shirt("Large", "Hello, World!");
