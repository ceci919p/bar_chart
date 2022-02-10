"use strict";

let array = [];
let counter = 0;

window.addEventListener("load", init);

function init() {
  setTimeout(loop, 500);
}

function loop() {
  const queueSize = getNumberOfCustomers();
  console.log("array", array);

  if (counter < 40) {
    array.unshift(queueSize);
    counter++;
    createNewBar();
  } else {
    array.length = 39;
    array.unshift(queueSize);
    createNewBar();
  }

  init();
}

function getNumberOfCustomers() {
  //gives a random number (max 32) of guests
  return Math.floor(Math.random() * 32);
}

function createNewBar() {
  const newBar = document.querySelector("#bars");
  newBar.innerHTML += `<div class="bar" style= "height: ${
    (array[0] / 32) * 100
  }%;"></div>`;
}
