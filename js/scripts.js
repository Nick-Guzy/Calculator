const operations = {
  currentNumber: undefined,
  operator: undefined,
  total: 0
}

function resetOperations() {
  operations.currentNumber = undefined;
  operations.operator = undefined;
  operations.total = undefined;
}

// UI logic

window.onload = function(){
  // document.querySelector("form").onsubmit=function(e){
  //   e.preventDefault()
  //   let firstNumber = parseInt(document.getElementById("number1").value);
  //   let secondNumber = parseInt(document.getElementById("number2").value);
  //   let operator = document.getElementById("operator-select").value;
  //   calculate(firstNumber, secondNumber, operator);
  // }

  let allButtons = document.getElementsByClassName('calculator-button');

  Array.from(allButtons).forEach(function(button) {
    button.onclick = function(e) {
      let buttonLabel = e.target.innerHTML;
      if (e.target.id === 'clear-button') {
        document.getElementById('calculator-display').innerText = "";
        resetOperations();
      } else if (e.target.classList.contains('operator')) {
        document.getElementById('calculator-display').innerText = "";
        operations.operator = buttonLabel;
        if (!operations.total) {
          operations.total = operations.currentNumber;
          operations.currentNumber = undefined;
        }
      } else if (e.target.id === "equals-button") {
        if (operations.currentNumber && operations.operator && operations.total) {
          let result = calculate(operations.total, operations.currentNumber, operations.operator);
          document.getElementById('calculator-display').innerText = result;
          operations.total = result;
        }
      } else {
        document.getElementById('calculator-display').innerText += buttonLabel;
        operations.currentNumber = parseInt(document.getElementById('calculator-display').innerText);
        
      }
      console.table(operations);
    }
  });
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