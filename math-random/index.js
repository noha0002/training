let max = 10;
let secret = Math.floor(Math.random() * max) + 1;

document.querySelector("button").addEventListener("click", () => {
  let guess = Number(document.querySelector("#love").value);

  function guessinggame(guess, secret) {
    if (guess < secret) {
      return "For lavt";
    } else if (guess > secret) {
      return "For højt"; // man gemmer return i et variabel (result), som har det gemt og først blir vist gennem et console eller text content. giver funktionen (guessing game) et svar tilbage. return sender svar til functionen, hvor det bliver gemt. in order to se if its right we use let variable = function name.
    } else {
      return "Rigtigt gættet 🎉";
    }
  }

  /*let result = guessinggame(guess, secret);
text.textContent = result;*/ // alternativ til at lave en variabel til at gemme return værdien. 
  text.textContent = guessinggame(guess, secret);
});

