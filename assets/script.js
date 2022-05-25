// creating time on the page
var dateTimeEl = document.getElementById("currentDay");
var today = new Date();
dateTimeEl.innerHTML = today.toLocaleDateString('en-US', {
    hour: "numeric",
    minute: "numeric",
    hour12: true });

// grabbing buttons
var saveBtnEl = $(".btn-primary");
var clearBtnEl = $(".btn-danger");

// grabbing each input
var nineEl = document.getElementById("nine");
var tenEl = document.getElementById("ten");
var elevenEl = document.getElementById("eleven");
var twelveEl = document.getElementById("twelve");
var oneEl = document.getElementById("one");
var twoEl = document.getElementById("two");
var threeEl = document.getElementById("three");
var fourEl = document.getElementById("four");
var fiveEl = document.getElementById("five");

// adding color depending on past, present, future
function changeColor () {
    let hour = $("input").text().trim();

    let time = moment(hour, "LT");

    $("input").removeClass("bg-success bg-secondary bg-danger")

    if (moment().isAfter(time)) {
        $("input").addClass("bg-secondary");
    } else if (moment().isBefore(time)) {
        $("input").addClass("bg-success");
    } else {
        $("input").addClass("bg-danger");
    }
};

// if (hour < 9) {
//     nineEl.classList.add("bg-success");
// } else if (hour = 9) {
//     nineEl.classList.add("bg-danger");
// } else {
//     nineEl.classList.add("bg-secondary");
// };

// if (hour < 10) {
//     tenEl.classList.add("bg-success");
// } else if (hour = 10) {
//     tenEl.classList.add("bg-danger");
// } else {
//     tenEl.classList.add("bg-secondary");
// };

// if (hour < 11) {
//     elevenEl.classList.add("bg-success");
// } else if (hour = 11) {
//     elevenEl.classList.add("bg-danger");
// } else {
//     elevenEl.classList.add("bg-secondary");
// };

// if (hour < 12) {
//     twelveEl.classList.add("bg-success");
// } else if (hour = 12) {
//     twelveEl.classList.add("bg-danger");
// } else {
//     twelveEl.classList.add("bg-secondary");
// };

// if (hour < 13) {
//     oneEl.classList.add("bg-success");
// } else if (hour = 13) {
//     oneEl.classList.add("bg-danger");
// } else {
//     oneEl.classList.add("bg-secondary");
// };

// if (hour < 14) {
//     twoEl.classList.add("bg-success");
// } else if (hour = 14) {
//     twoEl.classList.add("bg-danger");
// } else {
//     twoEl.classList.add("bg-secondary");
// };

// if (hour < 15) {
//     threeEl.classList.add("bg-success");
// } else if (hour = 15) {
//     threeEl.classList.add("bg-danger");
// } else {
//     threeEl.classList.add("bg-secondary");
// };

// if (hour < 16) {
//     fourEl.classList.add("bg-success");
// } else if (hour = 16) {
//     fourEl.classList.add("bg-danger");
// } else {
//     fourEl.classList.add("bg-secondary");
// };

// if (hour < 17) {
//     five.classList.add("bg-success");
// } else if (hour = 17) {
//     five.classList.add("bg-danger");
// } else {
//     five.classList.add("bg-secondary");
// };

// button functionality
function saveClickHandler() {
    var userText = $(this).siblings("input").val()
    var timeInput = $(this).siblings("input").attr("id")
    localStorage.setItem(timeInput, userText)
}

function clearClickHandler() {
    localStorage.clear();
    location.reload();
}

// local storage functionality
$("#nine").val(localStorage.getItem("nine"));
$("#ten").val(localStorage.getItem("ten"));
$("#eleven").val(localStorage.getItem("eleven"));
$("#twelve").val(localStorage.getItem("twelve"));
$("#one").val(localStorage.getItem("one"));
$("#two").val(localStorage.getItem("two"));
$("#three").val(localStorage.getItem("three"));
$("#four").val(localStorage.getItem("four"));
$("#five").val(localStorage.getItem("five"));

// event listener through JQuery
saveBtnEl.on("click", saveClickHandler);
clearBtnEl.on("click", clearClickHandler);

changeColor();