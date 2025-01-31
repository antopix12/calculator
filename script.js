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
  container.appendChild(btn);
}


function createButtons () {
  let otherButtons = ['+', '-', '*', '/', 'C', '='];

  for (let i = 0; i < otherButtons.length - 2; i++) {
    createButton(otherButtons[i], 'red');
  }
  for (let i = 9; i >= 0; i--) {
    createButton(i, 'white');
  }
  for (let i = 4; i < otherButtons.length; i++) {
    createButton(otherButtons[i], 'red');
  }
  
}

createButtons();