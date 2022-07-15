//COUNTER 

const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countDown() {
var hours = new Date().getHours().toLocaleString('tr-TR');
var minutes = new Date().getMinutes().toLocaleString('tr-TR');
var seconds = new Date().getSeconds().toLocaleString('tr-TR');


  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);
// PROPMPT
function promptFunction() {
    let person = prompt("Please enter your name"," fdsf");
    var touch =document.querySelector(".touch");
    if (person != null) {
      document.getElementById("myName").innerHTML =
      "Merhaba " + person + " Hoş geldin!";
      touch.style.display = "none";


    }
  }