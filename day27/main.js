// Question 79
console.log("\n\tQuestion 79 Starts Here\t\n");
/*This code creates a car object named car1 with properties like make, model,
 and year, and then prints the value of the 'model' property, which is "Corolla".*/
var car1 = {
    make: "Mercedes",
    model: "AMG",
    year: 2020
};
console.log(car1.model);
// Question 80
console.log("\n\tQuestion 80 Starts Here\t\n");
/*This single line of TypeScript code effectively updates a car object named car2: it
changes the color to "matte black" and the year to 2021, and then prints the entire updated object.*/
var car2 = {
    make: "Bugatti",
    model: "Chiron",
    year: 2020,
    color: "white",
};
car2.color = "matte black";
car2.year = 2021;
console.log(car2);
// Question 81
console.log("\n\tQuestion 81 Starts Here\t\n");
/*This code defines a function logObjectProperties that iterates over an o
bject's properties and prints them in a key-value format.*/
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
