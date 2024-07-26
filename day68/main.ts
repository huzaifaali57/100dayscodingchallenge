// Day 68

// Tuples
let data : readonly [string, number, boolean] = ["Belgium", 29.5 , true];
console.log(data)

data = ["apple", 12, false];

console.log(data);

const [country, integer, permission] = data;
console.log(country);
console.log(integer);
console.log(permission);