// Question 58
console.log("\n\tQuestion 58 Starts Here\t\n");
/*The code defines a function `averageScore` that calculates
the average of an arbitrary number of scores passed as arguments,
then logs the average score to the console after calling the
function with specific scores.*/
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScore(100, 65, 48, 76));
// Question 59
console.log("\n\tQuestion 59 Starts Here\t\n");
/*The code defines a higher-order function `makeAdder` that
generates and returns a function which adds a specified value
to its argument, then creates a new function `addFive` that adds
17 to its argument and logs the result of adding 10 to 17 to the console.*/
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(17);
console.log(addFive(10));
// Question 60
console.log("\n\tQuestion 60 Starts Here\t\n");
/*The code creates a module pattern encapsulating `name` and `age`
variables, returning an object with a method `displayInfo` to log
the name and age, and immediately invokes it, printing "Name: John,
Age: 30" to the console.*/
var userProfile = (function () {
    var name = "John";
    var age = 30;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
userProfile.displayInfo();
