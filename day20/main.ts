// Question 58
console.log("\n\tQuestion 58 Starts Here\t\n");
/*The code defines a function `averageScore` that calculates 
the average of an arbitrary number of scores passed as arguments, 
then logs the average score to the console after calling the 
function with specific scores.*/
function averageScore(...scores: number[]): number {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
console.log(averageScore(100, 65, 48, 76));

// Question 59
console.log("\n\tQuestion 59 Starts Here\t\n");
/*The code defines a higher-order function `makeAdder` that 
generates and returns a function which adds a specified value 
to its argument, then creates a new function `addFive` that adds 
17 to its argument and logs the result of adding 10 to 17 to the console.*/
function makeAdder(valueToAdd: number): (number) => number {
  return function (number: number): number {
    return number + valueToAdd;
  };
}
let addFive = makeAdder(17);
console.log(addFive(10));

// Question 60
console.log("\n\tQuestion 60 Starts Here\t\n");
/*The code creates a module pattern encapsulating `name` and `age` 
variables, returning an object with a method `displayInfo` to log 
the name and age, and immediately invokes it, printing "Name: John, 
Age: 30" to the console.*/
let userProfile = (function () {
  let name = "John";
  let age = 30;
  return {
    displayInfo: function () {
      console.log(`Name: ${name}, Age: ${age}`);
    },
  };
})();
userProfile.displayInfo();