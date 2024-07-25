// Day 67

// Type Annotations With Arrays
let fruitSalad : string[] = ["apple", "orange", "banana", "mango"];
for(let i = 0; i < fruitSalad.length; i++){
    console.log(`The Fruit Salad includes ${fruitSalad[i].toUpperCase()}`);
}

// Type Annotations With Multidimensional Arrays
let arrayNumber : number[] = [1, 2, 3, 4, 5];
let arrayString : string[] = ["string1","string2","string3","string4"];
let arrayMix : (string | number)[] = [1,2,3,"one","two","three"];

console.log(arrayNumber)
console.log(arrayString)
console.log(arrayMix)