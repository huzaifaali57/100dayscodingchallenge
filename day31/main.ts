// Question 91
console.log("\n\tQuestion 91 Starts Here\t\n");
/*The code adds "Mango" to a list of favorite fruits and 
then prints the updated list.*/
let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);

// Question 92
console.log("\n\tQuestion 92 Starts Here\t\n");
/*This code defines a function to remove the last element from 
an array and then uses it to remove the last element from a 
list of fruits, printing both the removed element and the modified list.*/
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}
const fruitss: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruitss));
console.log(fruitss);

// Question 93
console.log("\n\tQuestion 93 Starts Here\t\n");
/*This code defines a function that searches for "Banana" in a fruit list,
 replaces it with "Mango" if found, and then prints the modified list.*/
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana");
    if (index !== -1) fruits[index] = "Mango";
}
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);