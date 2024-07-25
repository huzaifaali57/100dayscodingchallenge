//  Day 66
// Union Types
let myMessage: string | number | boolean;

myMessage = "Hello";
console.log(myMessage);

myMessage = 10;
console.log(myMessage);

myMessage = true;
console.log(myMessage);

// Literal Types
let direction: "right" | "left" | "up" | "down";
direction = "right";
console.log(direction); // literal types can also be used in function parameters

// Nullable Types
let age: number | null;
age = 21;
console.log(age);
age = null;
console.log(age); // nullable types can also be used in function parameters

// Type Alias
type myNull = null;
let nullValue: myNull = null;
console.log(nullValue);

type myStringorBoolean = string | boolean;
let myAnswer: myStringorBoolean = true;
console.log(myAnswer);

// using a Type Alias with objects
type Person = {
  name: string;
  age: number;
  email?: string;
};
const Pacino: Person = {
  name: "Al Pacino",
  age: 56,
  email: "alpacino@example.com",
};
console.log(Pacino);

// Intersection Type
type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  address: string;
  phone: string;
};

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
  name: "Joohny Depp",
  age: 45,
  address: "123 Main St",
  phone: "123-456-7890",
};
console.log(person);