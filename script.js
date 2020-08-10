var sevenAmInput = document.querySelector("#7am");
var eightAmInput = document.querySelector("#8am");
var nineAmInput = document.querySelector("#9am");
var tenAmInput = document.querySelector("#10am");
var elevenAmInput = document.querySelector("#11am");
var twelvePmInput = document.querySelector("#12pm");
var onePmInput = document.querySelector("#1pm");
var twoPmInput = document.querySelector("#2pm");
var threePmInput = document.querySelector("#3pm");
var fourPmInput = document.querySelector("#4pm");
var fivePmInput = document.querySelector("#5pm");
var sixPmInput = document.querySelector("#6pm");
var sevenPmInput = document.querySelector("#7pm");
var eightPmInput = document.querySelector("#8pm");
var ninePmInput = document.querySelector("#9pm");
var saveButton = document.querySelector("#save");


saveButton.addEventListener("click", function(event) {
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
    FourPm: FourPmInput.value.trim(),
    FivePm: FivePmInput.value.trim(),
    SixPm: sixPmInput.value.trim(),
    SevenPm: sevenPmInput.value.trim(),
  }

    // set new submission
    console.log(schedule),
    localStorage.setItem("schedule", schedule)