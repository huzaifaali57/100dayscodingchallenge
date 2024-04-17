// Question 28
console.log("\n\tQuestion 28 Starts Here\t\n");
let person_age = 13;
if (person_age < 2) {
  console.log("Person is a baby");
} else if (person_age >= 2 && person_age < 4) {
  console.log("Person is a toddler");
} else if (person_age >= 4 && person_age < 13) {
  console.log("Person is a kid");
} else if (person_age >= 13 && person_age < 20) {
  console.log("Person is a teenager");
} else if (person_age >= 20 && person_age < 65) {
  console.log("Person is a adult");
} else if (person_age >= 65) {
  console.log("Person is a elder");
}

// Question 29
console.log("\n\tQuestion 29 Starts Here\t\n");
let favorite_fruits = ["mango", "apple", "strawberry", "orange", "grapes"];
console.log(favorite_fruits);
if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}
if (favorite_fruits.includes("apple")) {
  console.log("You really like apple!");
}
if (favorite_fruits.includes("strawbery")) {
  console.log("You really like strawberry!");
}
if (favorite_fruits.includes("orange")) {
  console.log("You really like orange!");
}
if (favorite_fruits.includes("grapes")) {
  console.log("You really like grapes!");
}

// Question 30
console.log("\n\tQuestion 30 Starts Here\t\n");
let users = ["admin", "manager", "eric", "martin", "robert"];
for (let i = 0; i <= users.length; i++) {
  if (users[i] == "admin") {
    console.log(`Hello ${users[i]} would you like to see a status report?`);
  } else if (users.includes(users[i])) {
    console.log(`Hello ${users[i]} thank you for logging in again.`);
  }
}
