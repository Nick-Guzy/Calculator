// UI logic

window.onload = function(){
  document.querySelector("form").onsubmit=function(e){
    e.preventDefault()
    let firstNumber = parseInt(document.getElementById("number1").value);
    let secondNumber = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator-select").value;
    calculate(firstNumber, secondNumber, operator);
  }
}

// Business logic

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber){
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber){
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber){
  return firstNumber / secondNumber;
}

function calculate(firstNumber, secondNumber, operator) {
  let result = '';
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "×") {
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    result = divide(firstNumber, secondNumber);
  }
  return result;
}