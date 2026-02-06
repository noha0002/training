"use strict";

const tekst = {
  de: [
    { text: "Das Bot", location: ".header" },
    { text: "Das Ro-Bot", location: ".footer" },
  ],
  da: [
    { text: "Båden", location: ".header" },
    { text: "Robotten", location: ".footer" },
  ],
};

function Langchoose() {
  const slide = document.getElementById("slide").value; 

  let chosen;

  if (slide === "dansk") {
    chosen = "da";
  } else if (slide === "tysk") {
    chosen = "de";
  } else {
    return; 
  }


  tekst[chosen].forEach((show) => {
    document.querySelector(show.location).textContent = show.text;
  });
  
}

document.getElementById("slide").addEventListener("change", Langchoose);



