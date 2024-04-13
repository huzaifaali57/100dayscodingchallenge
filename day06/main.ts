// Question 16
console.log("\n\t Question 16 Starts Here \t\n")
let guestList1 = ["Bill","Mark","Jeff"]
guestList1.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))
console.log(`\n${guestList1[2]} will not be joining the dinner...So`)
guestList1.splice(2,1,"Bernard")
console.log(`Instead ${guestList1[2]} will join us!`)
console.log("I found a bigger dinner table.\n")
guestList1.unshift("Elon")
let middleIndex1 : number = Math.floor(guestList1.length / 2)
guestList1.splice(middleIndex1,0,"Batman")
guestList1.push("Escobar")
guestList1.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))

// Question 17
console.log("\n\t Question 17 Starts Here \t\n")
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
console.log("I can invite only two people for dinner\n")
while(guestList.length > 2){
 let guestRemoved = guestList.pop()
 console.log(`Sorry ${guestRemoved} I am sorry you I could not invite you to dinner.\n`)
}
guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))
while(guestList.length = 0){
    guestList.pop()
}
console.log(`Empty List is`,guestList)

// Question 18
console.log("\n\t Question 18 Starts Here \t\n")
let places = ["Saudi Arabia","Iran","Canada","Scotland","Portugal"]
console.log("Original Order",places,"\n")
console.log("Alphabetical Order",[...places].sort(),"\n")
console.log("Still in Original Order",places,"\n")
console.log("Reversing List",[...places].reverse(),"\n")
console.log("Still in Original Order",places,"\n")
places.reverse()
console.log("Reversing Original List",places,"\n")
places.reverse()
console.log("Reversing back Original List",places,"\n")
console.log("Sorting Original List",places.sort(),"\n")
console.log("Reversing Sorted List",places.reverse(),"\n")