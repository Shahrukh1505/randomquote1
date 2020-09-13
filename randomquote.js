function startTime() {
  var today = new Date(); //object date created
  var h = today.getHours(); //gets the hours
  var m = today.getMinutes(); //gets the minutes
  var s = today.getSeconds(); //gets the seconds
  var ampm = "";
  m = checkTime(m); //function call m is passed on to function checktime
  // if statements for am pm and time
  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  } else if (h == 12) {
    h = 12;
    ampm = " AM";
  } else if (h < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  document.getElementById("display").innerHTML = h + ":" + m + ampm;
  var t = setTimeout(function () {
    startTime();
  }, 500); //the function will get executed after every 500miliseconds
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 10);
  document.getElementById("quote").innerHTML = quotes[randNum];
}

//quote array
var quotes = [
  '"The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
  "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
  "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
  "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown",
  "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Vince Lombardi",
  " “If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  "“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen",
  "“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino",
  "“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
  "“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe",
];

//date
function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] + //returns the element present at the index(which is the weekday number in a week)
    " | " +
    [d.getMonth() + 1] + //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
    "/" +
    d.getDate() + //gets the date
    "/" +
    d.getFullYear(); //gets the year
}
