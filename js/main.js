// DOM elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// show time
function showTime() {
  let today = new Date();
  //timey = today.getTime,
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 Format
  hour = hour % 12 || 12;

  //Output
  time.innerHTML = `${hour}<span>:<span>${min}<span>:<span>${sec}`;

  setTimeout(showTime, 1000);
}

//set background
function setGreeting() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, ";
  } else {
    greeting.textContent = "Good evening, ";
  }
}

//name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Friend";
  } else {
    name.textContent = localStorage.getItem('name');
  }
}
//focus

function getFocus() {
    if (localStorage.getItem("focus") === null) {
      focus.textContent = " Be productive";
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
//run
let a = showTime();
setGreeting();
getName();
getFocus()
