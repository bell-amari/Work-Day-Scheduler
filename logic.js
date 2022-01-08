// Registers from HTML elements
var dateView = window.document.querySelector("#currentDay");
// Using moment libarary to get and format date
var fullDate = moment().format("dddd, MMMM Do YYYY");
var hour = moment().format("H");
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
var newInner = [
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

var ids = ["timeBlockNine", "timeBlockTen", "timeBlockEleven", "timeBlockTwelve", "timeBlockOne", "timeBlockTwo", "timeBlockThree", "timeBlockFour", "timeBlockFive"];
var btnIds = ["timeBlockNineBtn", "timeBlockTenBtn", "timeBlockElevenBtn", "timeBlockTwelveBtn", "timeBlockOneBtn", "timeBlockTwoBtn", "timeBlockThreeBtn", "timeBlockFourBtn", "timeBlockFiveBtn"];

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
time = 9;
while(hold < 9) {
    $(".container").append(newDiv[hold]);
    $(newDiv[hold]).addClass("time-block");

    $(newDiv[hold]).append(newParagraph[hold]);
    $(newParagraph[hold]).addClass("hour");
    $(newParagraph[hold]).text(timeBlocks[hold]);

    $(newDiv[hold]).append(newInner[hold]);
    $(newInner[hold]).addClass("row");
    $(newInner[hold]).attr("id", ids[hold]);

    $(newDiv[hold]).append(newBtn[hold]);
    $(newBtn[hold]).addClass("saveBtn");
    $(newBtn[hold]).attr("id", btnIds[hold]);
    timeBased();

    addLocal(hold);
    hold++;
    time++;
}

function addLocal(i) {
    var saved = localStorage.getItem("item"+i);
    if(saved != null){
        var text = document.createElement("p");
        $(newInner[i]).append(text);
        $(text).text(saved);
        console.log(saved);
    }; 
}

function timeBased() {
    if(time < hour){
        $(newInner[hold]).addClass("past");
    }
    if(time == hour){
        $(newInner[hold]).addClass("present");
    }
    if(time > hour){
        $(newInner[hold]).addClass("future");
    }
}

function onClickAction(i) {
    $("#"+ids[i]).replaceWith("<textarea id='" + ids[i] + "'></textarea>");
    var f = 0;
    $("#"+btnIds[i]).click(function() {
        console.log(btnIds[i]+" was clicked.");
        saveUserInput(i);
    });
}

function saveUserInput(i){
    var text = document.getElementById(ids[i]).value;
    localStorage.setItem("item"+i, text);
    $("#"+ids[i]).replaceWith("<div class='row' id='" + ids[i] + "'>" + text + "</div>");
    
}



$("#"+ids[0]).click(function() {
    console.log(ids[0]+" was clicked.");
    onClickAction(0);
});

$("#"+ids[1]).click(function() {
    console.log(ids[1]+" was clicked.");
    onClickAction(1);
});

$("#"+ids[2]).click(function() {
    console.log(ids[2]+" was clicked.");
    onClickAction(2);
});

$("#"+ids[3]).click(function() {
    console.log(ids[3]+" was clicked.");
});

$("#"+ids[4]).click(function() {
    console.log(ids[4]+" was clicked.");
    onClickAction(4);
});

$("#"+ids[5]).click(function() {
    console.log(ids[5]+" was clicked.");
    onClickAction(5);
});

$("#"+ids[6]).click(function() {
    console.log(ids[6]+" was clicked.");
    onClickAction(6);
});

$("#"+ids[7]).click(function() {
    console.log(ids[7]+" was clicked.");
    onClickAction(7);
});

$("#"+ids[8]).click(function() {
    console.log(ids[8]+" was clicked.");
    onClickAction(8);
});