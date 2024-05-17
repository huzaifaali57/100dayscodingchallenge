// Question 124
console.log("\n\tQuestion 124 Starts Here\t\n");
/*this code defines an object named person with a property for 
storing its name and a method to retrieve it.*/
const person = {
  name: "Huzaifa",
  getName: function () {
    return this.name;
  },
};
console.log(person.getName());

// Question 125
console.log("\n\tQuestion 125 Starts Here\t\n");
/*This code defines a rectangle object with properties for length
 and width, along with a method to calculate its area.*/
const rectangle = {
  length: 14,
  width: 4,
  calculateArea: function () {
    return this.length * this.width;
  },
};
console.log(rectangle.calculateArea());

// Question 126
console.log("\n\tQuestion 126 Starts Here\t\n");
/*This code defines an object with a property and two methods, where 
the inner method uses an arrow function so it incorrectly inherits the 
outer method's 'this' context, causing it to log 'undefined' instead
of the object's property value.*/
const myObject = {
  property: 15,
  outerMethod: function () {
    console.log(this.property);
    const innerMethod = () => {
      console.log(this.property);
    };
    innerMethod();
  },
};
myObject.outerMethod();