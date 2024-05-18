// Question 127
console.log("\n\tQuestion 127 Starts Here\t\n");
/*This code defines two functions, one traditional and one an arrow function, that both add 
two numbers and then prints the results of calling those functions with inputs 5 and 3.*/
const traditionalFunction = function (a, b) {
  return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));

// Question 128
console.log("\n\tQuestion 128 Starts Here\t\n");
/*This code defines an arrow function 'multiplyParameters' that takes in an arbitrary number 
of numbers and returns their product using reduce.*/
const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(2, 3, 4));

// Question 129
console.log("\n\tQuestion 129 Starts Here\t\n");
/*This code defines an object with traditional and arrow functions that demonstrate the
 behavior of the 'this' keyword.*/
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value);
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value);
  },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();