// Question 97
console.log("\n\tQuestion 97 Starts Here\t\n");
/*This function formats the current date (day-month-year) with leading zeros.*/
function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());

// Question 98
console.log("\n\tQuestion 98 Starts Here\t\n");
/*This function calculates the days remaining until the next New Year's Day.*/
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");

// Question 99
console.log("\n\tQuestion 99 Starts Here\t\n");
/*This function calculates the date of your next birthday, adjusting
 the year if it has already passed this year.*/
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(9, 29);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());