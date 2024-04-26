var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 46
console.log("\n\tQuestion 46 Starts Here\t\n");
/*This code creates a 'laptop' object with properties for make, model, and year,
along with a method 'describe' to print out the laptop's details when called.*/
var laptop = {
    make: "HP",
    model: "XPS 15",
    year: 2023,
    info: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};
laptop.info();
// Question 47
console.log("\n\tQuestion 47 Starts Here\t\n");
/*
This code creates an array of laptop objects with different properties.
Then, it destructures the array into variables 'laptop1' and 'laptop2'
and logs their details to the console.*/
var laptops = [
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "HP", model: "Spectre x360", year: 2021 },
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
// Question 48
console.log("\n\tQuestion 48 Starts Here\t\n");
/*
This code creates two arrays of prices, combines them into one array
using spread syntax, sorts them in ascending order, and then logs
the sorted prices to the console.*/
var pricesSet1 = [59000, 65000, 35000];
var pricesSet2 = [25000, 42000, 18500];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
