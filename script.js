var sevenAmInput = document.querySelector("#seven-am");
var eightAmInput = document.querySelector("#eight-am");
var nineAmInput = document.querySelector("#nine-am");
var tenAmInput = document.querySelector("#ten-am");
var elevenAmInput = document.querySelector("#eleven-am");
var twelvePmInput = document.querySelector("#twelve-pm");
var onePmInput = document.querySelector("#one-pm");
var twoPmInput = document.querySelector("#two-pm");
var threePmInput = document.querySelector("#three-pm");
var fourPmInput = document.querySelector("#four-pm");
var fivePmInput = document.querySelector("#five-pm");
var sixPmInput = document.querySelector("#six-pm");
var sevenPmInput = document.querySelector("#seven-pm");
var eightPmInput = document.querySelector("#eight-pm");
var ninePmInput = document.querySelector("#nine-pm");
var saveButton = document.querySelector("#ten-pm");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  var schedule = {
    sevenAm: sevenAmInput.value.trim(),
    eightAm: eightAmInput.value.trim(),
    nineAm: nineAmInput.value.trim(),
    tenAm: tenAmInput.value.trim(),
    elevenAm: elevenAmInput.value.trim(),
    twelvePm: twelvePmInput.value.trim(),
    onePm: onePmInput.value.trim(),
    twoPm: twoPmInput.value.trim(),
    threePm: ThreePmInput.value.trim(),
    fourPm: FourPmInput.value.trim(),
    fivePm: FivePmInput.value.trim(),
    sixPm: sixPmInput.value.trim(),
    sevenPm: sevenPmInput.value.trim(),
  };

  // set new submission
  console.log(schedule);
  localStorage.setItem("schedule", schedule);

  // Store updated tasks in localStorage
  storeSchedule();
});
