document.getElementById("beregn-button").addEventListener("click", lommeregner);

function lommeregner() {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);
  const regneart = document.getElementById("lommeregne-code").value;
  let result;

  if (regneart === "+") {
    result = firstNumber + secondNumber;
  } else if (regneart === "-") {
    result = firstNumber - secondNumber;
  } else if (regneart === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = "Vælg regneart";
  }

  document.getElementById("result").value = result;
}
