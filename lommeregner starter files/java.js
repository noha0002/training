// query selector til displayet
const display = document.querySelector(".display");

// fanger alle knapper og sætter klik event på dem
document.querySelectorAll(".key").forEach((elm) => {
  elm.addEventListener("click", klik);
});

let displayContent = "";
let firstNumVal = "";
let secondNumVal = "";
let regneArt = "";

// Hovedfunktion for knapklik
function klik(evt) {
  const btnClicked = evt.target.dataset.func;

  if (isNumber(btnClicked)) {
    // bygger tal op
    if (!regneArt) {
      firstNumVal += btnClicked;
      displayContent = firstNumVal;
    } else {
      secondNumVal += btnClicked;
      displayContent = firstNumVal + regneArt + secondNumVal;
    }
    updateScreen(displayContent);
  } else if (isOperator(btnClicked)) {
    // gem operator
    if (!firstNumVal) return; // gør ingenting hvis ingen første tal
    regneArt = btnClicked;
    displayContent = firstNumVal + regneArt;
    updateScreen(displayContent);
  } else if (btnClicked === "=") {
    // beregn resultat
    if (!firstNumVal || !secondNumVal || !regneArt) return;
    const result = beregnResultat();
    updateScreen(result);
    // nulstil til næste regnestykke
    firstNumVal = result.toString();
    secondNumVal = "";
    regneArt = "";
    displayContent = firstNumVal;
  } else if (btnClicked === "ac") {
    // reset alt
    firstNumVal = "";
    secondNumVal = "";
    regneArt = "";
    displayContent = "";
    updateScreen("0");
  }
}

// check om det er tal
function isNumber(char) {
  return !isNaN(char);
}

// check om det er operator
function isOperator(char) {
  return char === "+" || char === "-" || char === "*" || char === "/";
}

// selve beregningen
function beregnResultat() {
  const a = Number(firstNumVal);
  const b = Number(secondNumVal);
  let result;

  if (regneArt === "+") result = a + b;
  else if (regneArt === "-") result = a - b;
  else if (regneArt === "*") result = a * b;
  else if (regneArt === "/") result = a / b;

  return result;
}

// opdater display
function updateScreen(chars) {
  display.value = chars;
}
