// Math functions

function add (x, y) {
  return x + y;
}

function subtract (x, y) {
  return y - x;
}

function multiply (x, y) {
  return x * y;
}

function divide (y, x) {
  return y / x;
}

// Operation variables
let num1 = 0;
let num2 = 0;
let operator = '';

function operate (opr, x, y) {
  return opr(x, y);
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
  display.textContent += '';
}

// Click handing / operations

function handleClick(event) {
  populateDisplay(event.target.textContent);
}

function mouseDown(event) {
  event.target.style.backgroundColor = "darkgrey";
}

function mouseUp(event, color) {
  event.target.style.backgroundColor = `${color}`;
}