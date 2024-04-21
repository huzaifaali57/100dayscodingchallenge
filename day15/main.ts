// Question 43
console.log("\n\tQuestion 43 Starts Here\t\n");
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
let great_magicians: string[] = [];
function make_great(magicians) {
  console.log("\nGreat Magician's Array\n");
  for (let i = 0; i < magicians.length; i++) {
    great_magicians[i] = `${magicians[i]} the Great`;
    console.log(great_magicians[i]);
  }
}
function show_magicians(magicians) {
  console.log("\nOriginal Array\n");
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}
show_magicians(magicians);
make_great([...magicians]);

// Question 44
console.log("\n\tQuestion 44 Starts Here\t\n");
function make_sandwich(...items: string[]) {
  console.log("Sandwich Summary:");
  console.log("Items: " + items.join(", "));
}
// Calling function with different numbers of arguments
make_sandwich("Turkey", "Cheese", "Lettuce");
make_sandwich("Ham", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");

// Question 45
console.log("\n\tQuestion 45 Starts Here\t\n");
function carInfo(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };
  options.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
}
// Calling the function with required information and additional details
let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(myCar);
