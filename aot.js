const fS = document.querySelector("#side1");
const SS = document.querySelector("#side2");
const TS = document.querySelector("#side3");
const calculate = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function calculateArea(e) {
  e.preventDefault();

  const Side1Value = Number(fS.value);
  const Side2Value = Number(SS.value);
  const Side3Value = Number(TS.value);

  if (
    Side1Value + Side2Value >= Side3Value &&
    Side3Value + Side2Value >= Side1Value &&
    Side1Value + Side3Value >= Side2Value
  ) {
    const semiPerimeter =
      (Side1Value + Side2Value + Side3Value) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - Side1Value) *
        (semiPerimeter - Side2Value) *
        (semiPerimeter - Side3Value)
    ).toFixed(4);
    output.innerText = `Area of a triangle using heron's formula is ${result} units`;
  } else {
    output.innerText = "Enter valid side length."
  }
}

calculate.addEventListener("click", calculateArea);