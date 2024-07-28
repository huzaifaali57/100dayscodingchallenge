// Day 70
var Order1 = {
    food: "Biryani",
    price: 1000
};
console.log(Order1);
var Person = {
    name: "Junaid",
    age: 30,
    greet: function (message) {
        console.log("".concat(message, ", my name is ").concat(this.name));
    }
};
Person.greet("Hi");
var homeKitchen = {
    theme: "Modern",
    color: "White",
    prepArea: true,
    sink: true
};
console.log(homeKitchen);
var Cat1 = /** @class */ (function () {
    function Cat1() {
    }
    Cat1.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat1;
}());
var Pigeon = {
    type: "Bird",
    fly: function () {
        console.log("Flap!");
    }
};
// Compatibility
// When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
// If you declare multiple type aliases with the same name, you'll get an error.
