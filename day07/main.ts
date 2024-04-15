// Question 19
console.log("\n\tQuestion 19 Starts From Here\t\n")
let guestList = ["Bill","Mark","Jeff"]
guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))
console.log(`\n${guestList[2]} will not be joining the dinner...So`)
guestList.splice(2,1,"Bernard")
console.log(`Instead ${guestList[2]} will join us!`)
console.log("I found a bigger dinner table.\n")
guestList.unshift("Elon")
let middleIndex : number = Math.floor(guestList.length / 2)
guestList.splice(middleIndex,0,"Batman")
guestList.push("Escobar")
guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))
let guestcount : number = guestList.length;
console.log(guestcount)

// Question 20
console.log("\n\tQuestion 19 Starts From Here\t\n")
let Cars : string[] = ["GTR","Veneno","Porsche 911","Chiron Supersport","La Ferrari"]
console.log("List of Cars I will buy in the Future :")
Cars.forEach(dreamstofulfill => console.log(dreamstofulfill))

// Question 21
console.log("\n\tQuestion 19 Starts From Here\t\n")
let smartphone = {
    Price: 100000,
    Model: "15 Pro Max",
    Brand: "Apple",
    RAM: 8,
};
console.log("Price: " + smartphone.Price);
console.log("Model: " + smartphone.Model);
console.log("Brand: " + smartphone.Brand);
console.log("RAM: " + smartphone.RAM);