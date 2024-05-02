// Question 61
console.log("\n\tQuestion 61 Starts Here\t\n");
/*The code defines an enumeration `VehicleType` with values `Car`,
`Truck`, and `Motorcycle`, then logs the numeric value associated
with `Car` (which is 0) to the console.*/
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Yachts"] = 0] = "Yachts";
    VehicleType[VehicleType["Supercars"] = 1] = "Supercars";
    VehicleType[VehicleType["Bikes"] = 2] = "Bikes";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Yachts);
// Question 62
console.log("\n\tQuestion 62 Starts Here\t\n");
var student = {
    name: "Ubaid",
    age: 21,
    courses: ["CAG", "OOP", "English"],
};
console.log(student);
// Question 63
console.log("\n\tQuestion 63 Starts Here\t\n");
var circle = {
    kind: "circle",
    radius: 5.5,
};
var rectangle = {
    kind: "rectangle",
    width: 5,
    height: 15,
};
console.log(circle);
console.log(rectangle);
