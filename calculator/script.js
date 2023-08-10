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
let operatorClicked = false;

function displayNumber(event) {
  if (display.textContent === "0" || operatorClicked) {
    display.textContent = "";
    operatorClicked = false;
  }
  const displayValue = event.target.value;
  display.textContent += displayValue;
}

function setOperator(event) {
  operator = event.target.value;
  operatorClicked = true;
  pushToNumbersArr(display.textContent);
};

function pushToNumbersArr(number) {
    numbersArr.push(number);
};

function doOperation() {
  const operators = ["+", "-", "*", "/"];
  pushToNumbersArr(display.textContent);
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

// need to make it so numbers can be more than one digit,
// clear works,
// 0 isn't there once a number is clicked,
// decimals work,
// multiple operations can be done,
// once a symbol is clicked after two numbers are clicked they show the total, only if doesn't effect with pemdas,
// make pemdas work, maybe
