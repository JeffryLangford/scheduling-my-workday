// creating time on the page
var dateTimeEl = document.getElementById("currentDay");
var today = new Date();
var hour = today.getHours();
var time = hour + ":" + today.getMinutes();
dateTimeEl.innerHTML = today.toLocaleDateString('en-US', { timeZone: 'America/Chicago' }) + " " + time;

// grabbing each input
var nineEL = document.getElementById("nine");
var tenEL = document.getElementById("ten");
var elevenEL = document.getElementById("eleven");
var twelveEL = document.getElementById("twelve");
var oneEL = document.getElementById("one");
var twoEL = document.getElementById("two");
var threeEL = document.getElementById("three");
var fourEL = document.getElementById("four");
var fiveEL = document.getElementById("five");

