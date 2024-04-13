//Question 13
var fav_transport = [
    "Lamborghinis",
    "Porsches",
    "Bentleys",
    "Private Jets",
    "Yachts",
];
for (var i = 0; i < fav_transport.length; i++) {
    console.log("I would love to own ".concat(fav_transport[i]));
}
// Question 14
var guestList1 = ["Mike", "Tristan", "Andrew"];
guestList1.forEach(function (guest) {
    return console.log("Would you like to dine with me ".concat(guest, " ?"));
});
// Question 15
var guestList2 = ["Bill", "Mark", "Jeff"];
guestList2.forEach(function (guest) {
    return console.log("Would you like to dine with me ".concat(guest, " ?"));
});
console.log("\n".concat(guestList2[2], " will not be joining the dinner...So"));
guestList2.splice(2, 1, "Bernard");
console.log("Instead ".concat(guestList2[2], " will join us!"));
console.log("So ".concat(guestList2, " will join the dinner."));
