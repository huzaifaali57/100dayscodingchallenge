var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 16
console.log("\n\t Question 16 Starts Here \t\n");
var guestList1 = ["Bill", "Mark", "Jeff"];
guestList1.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("\n".concat(guestList1[2], " will not be joining the dinner...So"));
guestList1.splice(2, 1, "Bernard");
console.log("Instead ".concat(guestList1[2], " will join us!"));
console.log("I found a bigger dinner table.\n");
guestList1.unshift("Elon");
var middleIndex1 = Math.floor(guestList1.length / 2);
guestList1.splice(middleIndex1, 0, "Batman");
guestList1.push("Escobar");
guestList1.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
// Question 17
console.log("\n\t Question 17 Starts Here \t\n");
var guestList = ["Bill", "Mark", "Jeff"];
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("\n".concat(guestList[2], " will not be joining the dinner...So"));
guestList.splice(2, 1, "Bernard");
console.log("Instead ".concat(guestList[2], " will join us!"));
console.log("I found a bigger dinner table.\n");
guestList.unshift("Elon");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Batman");
guestList.push("Escobar");
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("I can invite only two people for dinner\n");
while (guestList.length > 2) {
    var guestRemoved = guestList.pop();
    console.log("Sorry ".concat(guestRemoved, " I am sorry you I could not invite you to dinner.\n"));
}
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
while (guestList.length = 0) {
    guestList.pop();
}
console.log("Empty List is", guestList);
// Question 18
console.log("\n\t Question 18 Starts Here \t\n");
var places = ["Saudi Arabia", "Iran", "Canada", "Scotland", "Portugal"];
console.log("Original Order", places, "\n");
console.log("Alphabetical Order", __spreadArray([], places, true).sort(), "\n");
console.log("Still in Original Order", places, "\n");
console.log("Reversing List", __spreadArray([], places, true).reverse(), "\n");
console.log("Still in Original Order", places, "\n");
places.reverse();
console.log("Reversing Original List", places, "\n");
places.reverse();
console.log("Reversing back Original List", places, "\n");
console.log("Sorting Original List", places.sort(), "\n");
console.log("Reversing Sorted List", places.reverse(), "\n");
