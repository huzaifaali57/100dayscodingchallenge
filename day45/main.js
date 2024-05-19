// Question 133
console.log("\n\tQuestion 133 Starts Here\t\n");
//This code converts a JavaScript object into a JSON string format.
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
// Question 134
console.log("\n\tQuestion 134 Starts Here\t\n");
//This code converts a JSON string into a JavaScript object and prints it.
var jsonString2 = '{"name":"Alice","age":30,"city":"Wonderland"}';
var person2 = JSON.parse(jsonString);
console.log(person2);
// Question 135
console.log("\n\tQuestion 135 Starts Here\t\n");
//This line converts a JavaScript object to a JSON string format with 
//indentation for better readability.
var person3 = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
var jsonString3 = JSON.stringify(person3, null, 1);
console.log(jsonString3);
