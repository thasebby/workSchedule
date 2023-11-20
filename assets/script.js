// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    //on click event 
    $('.saveBtn').on("click",function(){
      const plannedActivity = document.getElementById("text").value;

      if(plannedActivity !== ''){
        saveToLocalStorage('Activity', plannedActivity);

        //saved to local storage text
      }

      
    });

    function saveToLocalStorage(key,value){
      const jsonValue = JSON.stringify(value);

      localStorage.setItem(key,jsonValue);
    }

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    //Current hour 
    const now = dayjs();
    const currentHour = now.format('HH');
    console.log(currentHour);

  function updateColor(){
    $(".time-block").each(function(){
      var hourBlock = $(this).attr("id");

      if(hourBlock === currentHour){
        $(this).addClass("present");
      }
      else if(hourBlock < currentHour){
        $(this).addClass("past");
      }
      else{
        $(this).addClass("future");
      }


      //if (hourBlock < currentHour){
        //$(this).addClass("past");
      //}
      //else if(hourBlock === currentHour){
        //$(this).addClass("present");
      //}
      //else{
        //$(this).addClass("future");
      //}
    })
  }

  updateColor();



    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    function displayCurrentDay(){
      var currentDate = new Date();

      var DOW = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"];
      var weekday = DOW[currentDate.getDay()];

      var allMonths = ["January" , "February", "March", "April","May","June","July","August","September","October","November","December"];
      var month = allMonths[currentDate.getMonth()];

      var day = currentDate.getDate();
      var year = currentDate.getFullYear();

      var displayDay = weekday + ':' + month + ' ' + day + ' ' + year;
      document.getElementById('currentDay').innerText = displayDay;

    }
    displayCurrentDay();

  });

