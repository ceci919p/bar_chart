"use strict";

let array = [];
let counter = 0;

window.addEventListener("load", init);

//init loop
function init() {
  //decides the delay of the loop
  setTimeout(loop, 500);
}

//our loop
function loop() {
  const queueSize = getNumberOfCustomers();
  console.log("array", array);

  if (counter < 40) {
    //the array grows and continues to make new bars until the statement is false (it is over 40).
    //unshift adds queueSize to array
    array.unshift(queueSize);
    //counter++ adds one to value of queueSize
    counter++;
    createNewBar();
  } else {
    //the array length is 39 and will never get over 40. Therefor it continues looping.
    //with array.unshift(queueSize) it still randomizes the numbers in the array
    array.length = 39;
    array.unshift(queueSize);
    //we still create a new bar since it is surposed to "keep going indefinetly"
    createNewBar();
  }

  init();
}

//get the number of customers
function getNumberOfCustomers() {
  //gives a random number (max 32) of guests
  return Math.floor(Math.random() * 32);
}

//createNewBar is where we implement our visual content to the DOM (innerHTML) and make a new div inside of #bars
//the new div is created with class "bar" added
//height ${(array[0] / 32)*100} defines the height in newBar in procentages. In our css we have height set as 100%
//The number is relative to 32 that is the (max) amount of customers

function createNewBar() {
  const newBar = document.querySelector("#bars");
  newBar.innerHTML += `<div class="bar" style= "height: ${
    (array[0] / 32) * 100
  }%;"></div>`;
}
