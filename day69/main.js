// Day 69
// Enums
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
var currentMonth = Months.August;
console.log("Current Month is ".concat(Months[currentMonth]));
