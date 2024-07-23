// Day 65
// Type Annotations With Function
function greet(message, name) {
    return "".concat(message, ", ").concat(name, "!");
}
var message = "Hello";
var Name = "Huzaifa";
var greetings = greet(message, Name);
console.log(greetings);
// Optional And Default Parameter
function whatIf(age, naame) {
    if (naame === void 0) { naame = "Huzaifa"; }
    if (age !== undefined) {
        return "".concat(naame, "'s friend age is 21");
    }
    else {
        return "What old is ".concat(naame, "'s friend ?");
    }
}
var answer = whatIf(21);
console.log(answer);
// Function Rest Parameter
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // 171.5
// Arrow Function
var addTwoNumbers = function (number1, number2) { return number1 + number2; };
var sum = addTwoNumbers(10.5, 0.65);
console.log(sum); // 11.15
// Anonymous Function
var sub = function (num1, num2) {
    return num1 - num2;
};
console.log(sub(19, 1.25)); // 17.75
// Void & Never
function logNumber(num) {
    console.log(num);
}
var anss = logNumber(20);
console.log(anss); // 20
function error(message) {
    throw new Error(message);
}
// let ans = error("Error")
// console.log(ans)     // returns undefined
