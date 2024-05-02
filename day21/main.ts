// Question 61
console.log("\n\tQuestion 61 Starts Here\t\n");
/*The code defines an enumeration `VehicleType` with values `Car`, 
`Truck`, and `Motorcycle`, then logs the numeric value associated 
with `Car` (which is 0) to the console.*/
enum VehicleType {
  Yachts,
  Supercars,
  Bikes,
}
console.log(VehicleType.Yachts);

// Question 62
console.log("\n\tQuestion 62 Starts Here\t\n");
/*The code defines an interface `Student` specifying properties 
`name`, `age`, and `courses`, then creates an object `student` 
adhering to this interface and logs it to the console.*/
interface Student {
  name: string;
  age: number;
  courses: string[];
}
let student: Student = {
  name: "Ubaid",
  age: 21,
  courses: ["CAG", "OOP", "English"],
};
console.log(student);

// Question 63
console.log("\n\tQuestion 63 Starts Here\t\n");
/*The code defines a type `Shape` with properties `kind`, 
`radius`, `width`, and `height`, allowing for either circle 
or rectangle shapes, then creates objects `circle` and `rectangle` 
adhering to this type and logs them to the console.*/
type Shape = {
  kind: "circle" | "rectangle";
  radius?: number;
  width?: number;
  height?: number;
};
let circle: Shape = {
  kind: "circle",
  radius: 5.5,
};
let rectangle: Shape = {
  kind: "rectangle",
  width: 5,
  height: 15,
};
console.log(circle);
console.log(rectangle);