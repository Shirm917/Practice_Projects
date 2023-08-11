function addNumberEvents() {
  const calculatorsDisplayBtns =
    document.body.querySelectorAll(".number,.decimal");
  for (const btn of calculatorsDisplayBtns) {
    btn.addEventListener("click", displayNumber);
  }
}

addNumberEvents();

// give class names of operator, number(decimal is a part of this), eqal sign, clear sign, etc.
// keep color ones maybe since some things that aren't the same category have the same color
// then change these query selectors
// think what if they don't hit equal and just hit another operator

function addOperatorListeners() {
  const operatorBtns = document.body.querySelectorAll(".operator");
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
}

function pushToNumbersArr(number) {
  numbersArr.push(number);
}

function doOperation() {
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
  emptyNumbersArr();
}

function emptyNumbersArr() {
  numbersArr.length = 0;
}

// need to make it so numbers can be more than one digit,
// clear works,
// 0 isn't there once a number is clicked,
// decimals work,
// multiple operations can be done,
// once a symbol is clicked after two numbers are clicked they show the total, only if doesn't effect with pemdas,
// make pemdas work, maybe
