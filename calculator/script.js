function addNumberEvents() {
  const calculatorsDisplayBtns = document.body.querySelectorAll(
    ".light-gray-bg:not(.clear)"
  );
  for (const btn of calculatorsDisplayBtns) {
    btn.addEventListener("click", displayNumber);
  }
}

addNumberEvents();

function addOperatorListeners() {
  const operatorBtns = document.body.querySelectorAll(".medium-gray-bg");
  for (const btn of operatorBtns) {
    btn.addEventListener("click", setOperator);
  }
}

addOperatorListeners();

function addEqualListener() {
  const equalSignBtn = document.body.querySelector(".equal-sign");
  equalSignBtn.addEventListener("click", doOperation);
}

addEqualListener();

let operator;
const numbersArr = [];
const display = document.body.querySelector(".display > span");

function displayNumber(event) {
  display.textContent = "";
  const displayValue = event.target.value;
  display.textContent += displayValue;
  numbersArr.push(displayValue);
}

function setOperator(event) {
  operator = event.target.value;
}

function doOperation() {
  let total;
  switch (operator) {
    case "+":
      total = +numbersArr[0] + +numbersArr[1];
      break;
    case "-":
      total = +numbersArr[0] - +numbersArr[1];
      break;
    case "*":
      total = +numbersArr[0] * +numbersArr[1];
      break;
    case "/":
      total = +numbersArr[0] / +numbersArr[1];
      break;
  }
  display.textContent = total;
}
