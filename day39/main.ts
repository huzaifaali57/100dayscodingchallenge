// Question 115
console.log("\n\tQuestion 115 Starts Here\t\n");
/*This code defines a function logDayOfWeek that prints the day of the week based 
on a number (1-7) using a switch statement.*/
function logDayOfWeek(dayNumber: number): void {
    switch (dayNumber) {
      case 1: console.log("Sunday"); break;
      case 2: console.log("Monday"); break;
      case 3: console.log("Tuesday"); break;
      case 4: console.log("Wednesday"); break;
      case 5: console.log("Thursday"); break;
      case 6: console.log("Friday"); break;
      case 7: console.log("Saturday"); break;
      default: console.log("Invalid day number"); break; }
  }
logDayOfWeek(7);

// Question 116
console.log("\n\tQuestion 116 Starts Here\t\n");
/*This code defines a function logSeason that uses a switch statement to log the season 
("Winter", "Spring", "Summer", or "Fall") based on a month number (1-12).*/
function logSeason(month: number): void {
    switch (month) {
        case 12: case 1: case 2: console.log("Winter"); break;
        case 3: case 4: case 5: console.log("Spring"); break;
        case 6: case 7: case 8: console.log("Summer"); break;
        case 9: case 10: case 11: console.log("Fall"); break;
        default: console.log("Invalid month"); break;
    }
  }
logSeason(12);

// Question 117
console.log("\n\tQuestion 117 Starts Here\t\n");
/*This code defines a function evaluateGrade that uses a switch statement to translate 
letter grades ("A", "B", "C", etc.) to corresponding messages ("Excellent", "Good", etc.) 
and calls it to evaluate a "B".*/
function evaluateGrade(grade: string): void {
    switch (grade) {
      case "A": console.log("Excellent"); break;
      case "B": console.log("Good"); break;
      case "C": console.log("Fair"); break;
      case "D": console.log("Poor"); break;
      case "F": console.log("Fail"); break;
      default: console.log("Invalid grade"); break;
    }
  }
evaluateGrade("A");