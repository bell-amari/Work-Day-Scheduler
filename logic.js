// Registers from HTML elements
var dateView = window.document.querySelector("#currentDay");
// Using moment libarary to get and format date
var fullDate = moment().format("dddd, MMMM Do YYYY");
// Writes date to HTML element
$(dateView).text(fullDate);

// Creating div for time blocks
var newDiv = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
];
var newInnerDiv = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
];
var newBtn = [
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button"),
    document.createElement("button")
];
var newParagraph = [
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p"),
    document.createElement("p")
];
var timeBlocks = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
// Time blocks are created
hold = 0;
while(hold < 9) {
    $(".container").append(newDiv[hold]);
    $(newDiv[hold]).addClass("time-block");

    $(newDiv[hold]).append(newParagraph[hold]);
    $(newParagraph[hold]).addClass("hour");
    $(newParagraph[hold]).text(timeBlocks[hold]);

    $(newDiv[hold]).append(newInnerDiv[hold]);
    $(newInnerDiv[hold]).addClass("row");

    $(newDiv[hold]).append(newBtn[hold]);
    $(newBtn[hold]).addClass("saveBtn");
    
    hold++;
}