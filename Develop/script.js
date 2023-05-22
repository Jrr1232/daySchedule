// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text("Today is " + "" + today.format('dddd, MMMM D YYYY'));



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  // Add an event listener to each save button
  var saveButtons = document.querySelectorAll(".saveBtn");
  // Add event listeners to the save buttons
  saveButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the parent div of the button
      var div = button.parentNode;

      // Get the textarea element within the parent div
      var textarea = div.querySelector(".description");

      // Get the unique ID of the current div
      var id = div.id;

      // Get the value from the textarea
      var text = textarea.value;

      // Save the value to localStorage with the unique ID as the key
      localStorage.setItem(id, text);
    });
  });





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Iterate over each div
  var timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach(function (div) {
    // Get the textarea element within the current div
    var textarea = div.querySelector(".description");

    // Retrieve the stored value from localStorage
    var id = div.id;
    var savedText = localStorage.getItem(id);
    if (savedText) {
      // Set the value of the textarea based on the stored value
      textarea.value = savedText;
    }






    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
  });
  function setColor() {
    var timeBlocks = document.querySelectorAll(".time-block");

    timeBlocks.forEach(function (timeBlock) {
      var hour = parseInt(timeBlock.id.split("-")[1]);
      var currentHour = parseInt(dayjs().format("H"));

      if (hour < currentHour) {
        timeBlock.classList.add("past");
      } else if (hour === currentHour) {
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.add("future");
      }
    });
  }

  setColor();
});
