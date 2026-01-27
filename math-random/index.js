let max = 10;
let secret = Math.floor(Math.random() * max) + 1; 

document.querySelector("button").addEventListener("click", () => {
  let guess = Number(document.querySelector("#love").value); // read input on click

  if (guess < secret) {
     alert("For lavt");
  } else if (guess > secret) {
    alert("For højt");
  } else {
    alert("Rigtigt gættet 🎉");
  }
});

