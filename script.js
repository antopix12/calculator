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