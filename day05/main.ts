//Question 13
let fav_transport = [
  "Lamborghinis",
  "Porsches",
  "Bentleys",
  "Private Jets",
  "Yachts",
];
for (let i = 0; i < fav_transport.length; i++) {
  console.log(`I would love to own ${fav_transport[i]}`);
}

// Question 14
let guestList1 = ["Mike", "Tristan", "Andrew"];
guestList1.forEach((guest) =>
  console.log(`Would you like to dine with me ${guest} ?`)
);

// Question 15
let guestList2 = ["Bill", "Mark", "Jeff"];
guestList2.forEach((guest) =>
  console.log(`Would you like to dine with me ${guest} ?`)
);
console.log(`\n${guestList2[2]} will not be joining the dinner...So`);
guestList2.splice(2, 1, "Bernard");
console.log(`Instead ${guestList2[2]} will join us!`);
console.log(`So ${guestList2} will join the dinner.`);
