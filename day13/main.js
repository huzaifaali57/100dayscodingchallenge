// Question 37
console.log("\n\tQuestion 37 Starts Here\t\n");
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The T-shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Calling the function with size "Large" and message "Hello, World!"
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello, World!");
// Question 38
console.log("\n\tQuestion 38 Starts Here\t\n");
function describe_city(city_name, country_name) {
    if (city_name === void 0) { city_name = "Karachi"; }
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
}
describe_city("Lahore");
describe_city("New York", "USA");
describe_city("Delhi", "India");
// Question 39
console.log("\n\tQuestion 39 Starts Here\t\n");
function describe_cityy(cityy_name, countryy_name) {
    console.log("\"".concat(cityy_name, "\",\"").concat(countryy_name, "\""));
}
describe_cityy("Lahore", "Pakistan");
describe_cityy("New York", "USA");
describe_cityy("Delhi", "India");
