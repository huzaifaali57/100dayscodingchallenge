// Question 31
console.log("\n\tQuestion 31 Starts Here\t\n")
let users = ["user1", "user2", "user3"];
if (users.length > 0) {
  console.log(`User Count ${users.length}`);
} else {
  console.log("No users found.");
}
// Remove all of the usernames from your array
users.splice(0, users.length);
console.log(users);

// Question 32
console.log("\n\tQuestion 32 Starts Here\t\n")
let current_users = ["user1", "user2", "user3", "user4", "user5"];
let new_users = ["user6", "user7", "USER1", "user8", "user2"];
for (let i = 0; i < new_users.length; i++) {
  let usernames = new_users[i];
  if (current_users.includes(usernames.toLowerCase())) {
    console.log(`${usernames} is already in use. Please enter new username`);
  } else {
    console.log(`${usernames} is available!`);
  }
}

// Question 33
console.log("\n\tQuestion 33 Starts Here\t\n")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal = " ";
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 1) {
    ordinal = "st";
  } else if (numbers[i] == 2) {
    ordinal = "nd";
  } else if (numbers[i] == 3) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }
  console.log(`${numbers[i]}${ordinal}`);
}