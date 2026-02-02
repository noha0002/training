"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector(".rock").addEventListener("click", rockClick);
  document.querySelector(".paper").addEventListener("click", paperClick);
  document.querySelector(".scissors").addEventListener("click", scissorsClick);
}

//function chooseRock() {
//  startgame(0);
//}
//function choosePaper() {
//  startgame(1);
//}
//function choosescissors() {
//  startgame(2);
//} er også en mulighed

function rockClick() {
  userChoice = "rock";
  computerChooses();
}
function paperClick() {
  userChoice = "paper"; // the reason why dont use computerchoose is cus we manually pick the buttons. we need the computer to randomly choose , thats why we do math.radom. 
  computerChooses();
}

function scissorsClick() {
  userChoice = "scissors";
  computerChooses(); // Okay, the user has chosen. Now it’s computer turn to choose. 
}

function computerChooses() {
  const rand = Math.random();
  if (rand < 0.34) computerChoice = "rock";
  else if (rand <= 0.67)
    computerChoice = "paper"; // math.random er kun for computerchoice ikke for user. så det hva the opponent vælger.  so alt under 0.34 er rock, altå over 0.34  men under 0.67 er paper, resterende op til 1 er scircors.
  else computerChoice = "scissors";

  handShakesStart();
}

// JavaScript doesn’t have a “pick a random string” function by itself
// Math.random() gives a random number between 0 and 1
// Then we convert that number into rock, paper, or scissors using ranges. 

function handShakesStart() {
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.style.backgroundImage = "url(hand_rock.png)";
  player2.style.backgroundImage = "url(hand_rock.png)";

  void player1.offsetWidth;
  void player2.offsetWidth;

  setTimeout(() => {
    player1.classList.remove("shake");
    player2.classList.remove("shake");

    if (userChoice === "rock")
      player1.style.backgroundImage = "url(hand_rock.png)";
    
     
    else if (userChoice === "paper")
      player1.style.backgroundImage = "url(hand_paper.png)";
    else if (userChoice === "scissors")
      player1.style.backgroundImage = "url(hand_scissors.png)";

    if (computerChoice === "rock")
      player2.style.backgroundImage = "url(hand_rock.png)";
    else if (computerChoice === "paper")
      player2.style.backgroundImage = "url(hand_paper.png)";
    else if (computerChoice === "scissors")
      player2.style.backgroundImage = "url(hand_scissors.png)";
  }, 1000);
}
