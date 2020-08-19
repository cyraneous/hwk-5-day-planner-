var nineAmInput = document.querySelector("#nine-am");
var tenAmInput = document.querySelector("#ten-am");
var elevenAmInput = document.querySelector("#eleven-am");
var twelvePmInput = document.querySelector("#twelve-pm");
var onePmInput = document.querySelector("#one-pm");
var twoPmInput = document.querySelector("#two-pm");
var threePmInput = document.querySelector("#three-pm");
var fourPmInput = document.querySelector("#four-pm");
var fivePmInput = document.querySelector("#five-pm");

var currentDate;
var currentTime;

$(window).on("load", function () {
  currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
  $("#currentDay").append(currentDate);
  currentTime = moment().format("H");


saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var schedule = {
    nineAm: nineAmInput.value.trim(),
    tenAm: tenAmInput.value.trim(),
    elevenAm: elevenAmInput.value.trim(),
    twelvePm: twelvePmInput.value.trim(),
    onePm: onePmInput.value.trim(),
    twoPm: twoPmInput.value.trim(),
    threePm: ThreePmInput.value.trim(),
    fourPm: FourPmInput.value.trim(),
    fivePm: FivePmInput.value.trim(),

  };

  // set new submission
  console.log(schedule);
  localStorage.setItem("schedule", schedule);

  // Store updated tasks in localStorage
  storeSchedule();
});
