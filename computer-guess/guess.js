"use strict";

let min = 0;
let max = 10;
let guess = undefined;
let guesses = 0;

const guessDisplay = document.getElementById("guessDisplay");
const startBtn = document.getElementById("start");
const tooLowBtn = document.getElementById("tooLow");
const tooHighBtn = document.getElementById("tooHigh");
const correctBtn = document.getElementById("correct");

startBtn.addEventListener("click", startGame);
tooLowBtn.addEventListener("click", tooLow);
tooHighBtn.addEventListener("click", tooHigh);
correctBtn.addEventListener("click", correct);

function startGame() { // this is where the game starts
  min = 0;
  max = 10;
  guesses = 0; // man starter altid på 0 gæt, den viser hvor mange gæt den har brugt. 
  computerguessing();

  startBtn.disabled = true;
  tooLowBtn.disabled = false;
  tooHighBtn.disabled = false;
  correctBtn.disabled = false;
}

function computerguessing() {
  //her gætter computeren
  guess = Math.floor((min + max) / 2);
  guesses++; // guesses = guesses + 1; Så vi kan senere sige: “Jeg gættede rigtigt på X gæt” hvor mange guesses
  guessDisplay.textContent = "Jeg gætter på " + guess;
}

 function tooLow() {
   min = guess + 1; // betyder at det the guess is too low og man skal gætte højere, derfor plus 1. 
   computerguessing();
 }

function tooHigh() {
  max = guess - 1;
  computerguessing();
}



function correct() {
  guessDisplay.textContent =
    "Jeg gættede rigtigt! 🎉 Det tog " + guesses + " gæt.";

  startBtn.disabled = false;
  tooLowBtn.disabled = true;
  tooHighBtn.disabled = true;
  correctBtn.disabled = true;
}
