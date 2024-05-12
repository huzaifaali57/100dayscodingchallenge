// Question 109
console.log("\n\tQuestion 109 Starts Here\t\n");
/*This code checks if the current hour is less than 12 and prints "Good Morning User" if it is.*/
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning User");
}
else {
    console.log("It's not Morning");
}
// Question 110
console.log("\n\tQuestion 110 Starts Here\t\n");
/*This code defines a function assignGrade that takes a score and returns the corresponding letter
grade ("A" for 90-100, "B" for 80-89, etc.) and then calls it to print grades for 80 and 55.*/
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(80));
console.log(assignGrade(55));
// Question 111
console.log("\n\tQuestion 111 Starts Here\t\n");
/*This code defines a function categorizeAge that takes an age and assigns a category ("child" for
under 13, "teenager" for 13-19, "adult" for 20+) based on pre-defined ranges and then calls it to
print categories for ages 12, 18, and 25.*/
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12));
console.log(categorizeAge(18));
console.log(categorizeAge(25));
