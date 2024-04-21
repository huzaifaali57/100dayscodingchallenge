var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 43
console.log("\n\tQuestion 43 Starts Here\t\n");
var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
var great_magicians = [];
function make_great(magicians) {
    console.log("\nGreat Magician's Array\n");
    for (var i = 0; i < magicians.length; i++) {
        great_magicians[i] = "".concat(magicians[i], " the Great");
        console.log(great_magicians[i]);
    }
}
function show_magicians(magicians) {
    console.log("\nOriginal Array\n");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
make_great(__spreadArray([], magicians, true));
// Question 44
console.log("\n\tQuestion 44 Starts Here\t\n");
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Items: " + items.join(", "));
}
// Calling function with different numbers of arguments
make_sandwich("Turkey", "Cheese", "Lettuce");
make_sandwich("Ham", "Tomato");
make_sandwich("Peanut Butter", "Jelly", "Banana", "Honey");
// Question 45
console.log("\n\tQuestion 45 Starts Here\t\n");
function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Calling the function with required information and additional details
var myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(myCar);
