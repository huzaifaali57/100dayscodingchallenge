// Question 112
console.log("\n\tQuestion 112 Starts Here\t\n");
/*This code creates a Map named countries associating country names (keys)
with their capital cities (values) and then prints the entire map.*/
var countries = new Map();
countries.set("Afghanistan", "Kabul");
countries.set("Austria", "Vienna");
countries.set("Azerbaijan", "Baku");
console.log(countries);
// Question 113
console.log("\n\tQuestion 113 Starts Here\t\n");
/*Prints capital from "Canada" in a map, or message if not found.*/
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
// Question 114
console.log("\n\tQuestion 114 Starts Here\t\n");
/*This code creates a map of student IDs (keys) and names (values), then
iterates through it logging each student's ID and name.*/
var students = new Map();
students.set(1, "Huzaifa");
students.set(2, "Yaseen");
students.set(3, "Murtaza");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
