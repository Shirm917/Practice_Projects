function addNumberEvents() {
  const calculatorsDisplayBtns =
    document.body.querySelectorAll(".number,.decimal");
  for (const btn of calculatorsDisplayBtns) {
    btn.addEventListener("click", displayNumber);
  }
}

function addOperatorListeners() {
  const operatorBtns = document.body.querySelectorAll(".operator");
  for (const btn of operatorBtns) {
    btn.addEventListener("click", setOperator);
  }
}

function addEqualListener() {
  const equalSignBtn = document.body.querySelector(".equal-sign");
  equalSignBtn.addEventListener("click", doOperation);
}

function addClearListener() {
  const clearBtn = document.body.querySelector(".clear");
  clearBtn.addEventListener("click", clearCalculator);
}
function addDeleteListener() {
  const deleteBtn = document.body.querySelector(".delete");
  deleteBtn.addEventListener("click", deleteInput);
}

addNumberEvents();
addOperatorListeners();
addEqualListener();
addClearListener();
addDeleteListener();

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
  operatorClicked = true;
  if (operator) {
    doOperation("setOperator");
  } else {
    pushToNumbersArr(display.textContent);
  }
  operator = event.target.value;
}

function clearOperator() {
  operator = null;
}

function pushToNumbersArr(number) {
  numbersArr.push(number);
}

function doOperation(functionTitle) {
  if (numbersArr.length < 1) return;
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
  if (functionTitle === "setOperator") {
    pushToNumbersArr(total);
  }
  clearOperator();
}

function emptyNumbersArr() {
  numbersArr.length = 0;
}

function clearCalculator() {
  emptyNumbersArr();
  clearOperator();
  display.textContent = 0;
}

function deleteInput() {
  const updatedTextContent = display.textContent.slice(0,-1);
  if (updatedTextContent === "") {
    display.textContent = "0";
  } else {
    display.textContent = updatedTextContent;
  }
}
