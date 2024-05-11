// Question 97
console.log("\n\tQuestion 97 Starts Here\t\n");
/*This function formats the current date (day-month-year) with leading zeros.*/
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
// Question 98
console.log("\n\tQuestion 98 Starts Here\t\n");
/*This function calculates the days remaining until the next New Year's Day.*/
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Question 99
console.log("\n\tQuestion 99 Starts Here\t\n");
/*This function calculates the date of your next birthday, adjusting
 the year if it has already passed this year.*/
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(9, 29);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
