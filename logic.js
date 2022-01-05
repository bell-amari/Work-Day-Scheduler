// Registers from HTML elements
var dateView = window.document.querySelector("#display-current-date-long");
// Array of months
const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Array of days of week
const weekDay = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];
// Getting current date
currentDate = new Date();
// Getting date info as intergers
var weekNum = currentDate.getDay();
var monthNum = currentDate.getMonth();
var dayNum = currentDate.getDate();
// if satements deals with the suffix apended to the day of month
var ordinalSuffix = "";
if(dayNum === 1) {
    ordinalSuffix = "st"
}
if(dayNum === 2) {
    ordinalSuffix = "nd"
}
if(dayNum > 3) {
    ordinalSuffix = "th"
}
// Presents full date as a string
var fullDate = weekDay[weekNum] + ", " + month[monthNum] + " " + dayNum + ordinalSuffix;
// Writes date to HTML element
$(dateView).text(fullDate);
