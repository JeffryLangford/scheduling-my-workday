// creating time on the page
var dateTimeEl = document.getElementById("currentDay");
var today = new Date();
dateTimeEl.innerHTML = today.toLocaleDateString('en-US', {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true });

// grabbing buttons
var saveBtnEl = $(".btn-primary");
var clearBtnEl = $(".btn-danger");

// grabbing each input
var sevenEl = document.getElementById("seven");
var eightEl = document.getElementById("eight");
var nineEl = document.getElementById("nine");
var tenEl = document.getElementById("ten");
var elevenEl = document.getElementById("eleven");
var twelveEl = document.getElementById("twelve");
var oneEl = document.getElementById("one");
var twoEl = document.getElementById("two");
var threeEl = document.getElementById("three");
var fourEl = document.getElementById("four");
var fiveEl = document.getElementById("five");
var sixEl = document.getElementById("six");

// adding color depending on past, present, future
function changeColor () {

    $("input").removeClass("bg-success bg-secondary bg-danger")

    $(".row .col-1:first-child").each(function(index) {
        let hour = $(this).text()
        let time = moment(hour, "LT")
        
        if (moment().isAfter(time)) {
            $(this).next().addClass("bg-secondary")
        } else {
            $(this).next().addClass("bg-success")
        }
        
        if (moment().hour() == time.hour()) {
            $(this).next().addClass("bg-danger")
        }
    
    })

};

// button functionality
function saveClickHandler() {
    var userText = $(this).siblings("input").val()
    var timeInput = $(this).siblings("input").attr("id")
    localStorage.setItem(timeInput, userText)
};

function clearClickHandler() {
    localStorage.clear();
    location.reload();
};

// local storage functionality
$("#seven").val(localStorage.getItem("seven"));
$("#eight").val(localStorage.getItem("eight"));
$("#nine").val(localStorage.getItem("nine"));
$("#ten").val(localStorage.getItem("ten"));
$("#eleven").val(localStorage.getItem("eleven"));
$("#twelve").val(localStorage.getItem("twelve"));
$("#one").val(localStorage.getItem("one"));
$("#two").val(localStorage.getItem("two"));
$("#three").val(localStorage.getItem("three"));
$("#four").val(localStorage.getItem("four"));
$("#five").val(localStorage.getItem("five"));
$("#six").val(localStorage.getItem("six"));

// event listener through JQuery
saveBtnEl.on("click", saveClickHandler);
clearBtnEl.on("click", clearClickHandler);

changeColor();