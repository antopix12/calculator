// Math functions

function add (x, y) {
  return Number((x + y).toFixed(9));
}

function subtract (y, x) {
  return Number((y - x).toFixed(9));
}

function multiply (x, y) {
  return Number((x * y).toFixed(9));
}

function divide (y, x) {
  if (x == 0) {
    clearDisplay();
    clearVariables();
    return 'Error';
  }
  return Number((y / x).toFixed(8));
}

// Operation variables
let num1 = '';
let num2 = '';
let operator = '';
let typingSecondNum = false;
let operatorPressed = false;

function operate(opr, x, y) {
  const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  };

  if (operations[opr]) {
    return operations[opr](Number(x), Number(y)); // Call the correct function
  } else {
    clearVariables();
    clearDisplay();
    return '';
  }
}


function clearVariables () {
  num1 = '';
  num2 = '';
  operator = '';
  typingSecondNum = false;
}

// Create buttons

const container = document.querySelector(".container");

function createButton (content, color) {
  const btn = document.createElement("div");
  btn.classList.add("btn");
  btn.textContent = `${content}`;
  btn.style.backgroundColor = `${color}`;
  btn.addEventListener("click", handleClick);
  btn.addEventListener("mousedown", mouseDown);
  btn.addEventListener("mouseup", (event) => mouseUp(event, color));
  btn.addEventListener("mouseout", (event) => mouseUp(event, color));
  container.appendChild(btn);
}

function createButtons () {
  let otherButtons = ['+', '-', '*', '/', 'C', '='];

  for (let i = 0; i < otherButtons.length - 2; i++) {
    createButton(otherButtons[i], 'cyan');
  }
  for (let i = 9; i >= 0; i--) {
    createButton(i, 'white');
  }
  for (let i = 4; i < otherButtons.length; i++) {
    createButton(otherButtons[i], 'red');
  }
}

createButtons();

// Display functions

function populateDisplay (displayThis) {
  const display = document.querySelector('.display');
  if (display.textContent.length < 9) {
    display.textContent += `${displayThis}`; // prevent overflow in the display div
  }
}

function clearDisplay() {
  const display = document.querySelector('.display');
  display.textContent = '';
}

// Click handing / operations

function handleClick(event) {
  let input = event.target.textContent;
  
  // only numbers get displayed
  if (!isNaN(input)) {
    populateDisplay(event.target.textContent);

    if (!typingSecondNum) {
      num1 += input;
    } else {
      clearDisplay();
      num2 += input;
      populateDisplay(num2);
    }
    operatorPressed = false;
  } else if (input === 'C') {
    clearDisplay();
    clearVariables();
    operatorPressed = false;
  } else if (input === '=') {

    // handle operation if valid
    clearDisplay();
    populateDisplay(operate(operator, num1, num2));
    clearVariables();
    operatorPressed = false;

  } else { // handle operators
    if (operatorPressed) return; // prevent multiple operators

    if (!typingSecondNum) typingSecondNum = true;
    operator = input;
    operatorPressed = true;
  }
}

function getOperatorFunction (input) {
  if (input === '+') {
    return sum
  }
}

function mouseDown(event) {
  event.target.style.backgroundColor = "darkgrey";
}

function mouseUp(event, color) {
  event.target.style.backgroundColor = `${color}`;
}

