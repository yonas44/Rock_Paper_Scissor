"use strict";

const btn = document.querySelector(".play");
btn.addEventListener("click", playGame);
const screen = document.querySelector(".screen");
const possiblities = ["Rock", "Paper", "Scissor"];
function playGame() {
  const optionPicked = document.querySelector("#options");
  let randomNum = Math.round(Math.random() * 2);
  if (optionPicked.value == "Rock") {
    if (possiblities[randomNum] == "Scissor") {
      screen.textContent = "ROCK beats SCISSOR, so Human won!!";
    } else if (possiblities[randomNum] == "Rock") {
      screen.textContent = "Its a TIE! Play again!";
    } else {
      screen.textContent = "PAPER beats ROCK, so Machine won!!";
    }
  } else if (optionPicked.value == "Paper") {
    if (possiblities[randomNum] == "Scissor") {
      screen.textContent = "SCISSOR beats PAPER, so Machine won!!";
    } else if (possiblities[randomNum] == "Paper") {
      screen.textContent = "Its a TIE! Play again!";
    } else {
      screen.textContent = "PAPER beats Rock, so Human won!!";
    }
  } else if (optionPicked.value == "Scissor") {
    if (possiblities[randomNum] == "Rock") {
      screen.textContent = "ROCK beats SCISSOR, so Machine won!!";
    } else if (possiblities[randomNum] == "Scissor") {
      screen.textContent = "Its a TIE! Play again!";
    } else {
      screen.textContent = "PAPER beats ROCK, so Human won!!";
    }
  }
}
// console.log("hello");
