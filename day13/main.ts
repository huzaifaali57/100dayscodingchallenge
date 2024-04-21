// Question 37
console.log("\n\tQuestion 37 Starts Here\t\n");
function make_shirt(size = "Large", message = "I love TypeScript") {
  console.log(
    `The T-shirt size is ${size} and the message printed on it is: "${message}".`
  );
}
// Calling the function with size "Large" and message "Hello, World!"
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello, World!");

// Question 38
console.log("\n\tQuestion 38 Starts Here\t\n");
function describe_city(city_name = "Karachi", country_name = "Pakistan") {
  console.log(`${city_name} is in ${country_name}`);
}
describe_city("Lahore");
describe_city("New York", "USA");
describe_city("Delhi", "India");

// Question 39
console.log("\n\tQuestion 39 Starts Here\t\n");
function describe_cityy(cityy_name, countryy_name: string) {
  console.log(`"${cityy_name}","${countryy_name}"`);
}
describe_cityy("Lahore", "Pakistan");
describe_cityy("New York", "USA");
describe_cityy("Delhi", "India");
