// Day 70

// Interface
interface Order{
    food : string;
    price : number;
}
const Order1 : Order = {
    food : "Biryani",
    price : 1000
}
console.log(Order1)

// Interface Method And Parameters
interface Person {
    name : string;
    age : number;
    greet(message : string) : void;
}
const Person : Person = {
    name : "Junaid",
    age : 30,
    greet(message : string) {
        console.log(`${message}, my name is ${this.name}`)
    }
}
Person.greet("Hi")

// ReOpen The Interface And Use Cases
interface Kitchen {
    readonly theme : string;
    color : string;
}
interface Kitchen {
    prepArea : boolean;
}
interface Kitchen {
    sink : boolean;
}
let homeKitchen : Kitchen = {
    theme : "Modern",
    color : "White",
    prepArea : true,
    sink : true
}
console.log(homeKitchen)

// Built-In Interface
// TypeScript provides built-in interfaces for HTML elements, 
// such as HTMLElement, HTMLDivElement, HTMLAnchorElement, etc.
// These interfaces define the properties and methods available 
// for working with elements in the Document Object Model (DOM).


// HTMLImageElement
// const imgElement: HTMLImageElement = document.createElement("img");
// imgElement.src = "image.jpg";
// imgElement.alt = "My Image";

// if (imgElement.complete) {
//     console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
// } else {
//     imgElement.addEventListener("load", () => {
//         console.log(`Image dimensions: ${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
//     });
// }

// Interface vs. Type Aliases
// Declaration Syntax
interface PersonExOne{
    name : string;
    age: number;
}
type PersonEx = {
    name : string;
    age: number;
}

// Extending and Implementing
// Interface
interface Animal {
    type : string;
}
interface Cat extends Animal {
    meow() : void;
}
class Cat1 implements Cat {
    type : "Cat";
    meow() {
        console.log("Meow!")
    }
}

// Type Alias
type Birds = {
    type : string;
}
type Bird1 = Birds & {
    fly() : void;
}
const Pigeon : Bird1 = {
    type : "Bird",
    fly() {
        console.log("Flap!")
    }
}

// Compatibility
// When you declare multiple interfaces with the same name, TypeScript will merge them into a single interface.
// If you declare multiple type aliases with the same name, you'll get an error.