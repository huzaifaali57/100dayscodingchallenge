// Question 46
console.log("\n\tQuestion 46 Starts Here\t\n");
/*This code creates a 'laptop' object with properties for make, model, and year, 
along with a method 'describe' to print out the laptop's details when called.*/
let laptop = {
  make: "HP",
  model: "XPS 15",
  year: 2023,
  info: function () {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};
laptop.info();

// Question 47
console.log("\n\tQuestion 47 Starts Here\t\n");
/*
This code creates an array of laptop objects with different properties.
Then, it destructures the array into variables 'laptop1' and 'laptop2' 
and logs their details to the console.*/
let laptops = [
  { make: "Apple", model: "MacBook Pro", year: 2020 },
  { make: "Dell", model: "XPS 15", year: 2021 },
  { make: "HP", model: "Spectre x360", year: 2021 },
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

// Question 48
console.log("\n\tQuestion 48 Starts Here\t\n");
/*
This code creates two arrays of prices, combines them into one array 
using spread syntax, sorts them in ascending order, and then logs 
the sorted prices to the console.*/
let pricesSet1 = [59000, 65000, 35000];
let pricesSet2 = [25000, 42000, 18500];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);