// ==============================
// SELECT ELEMENTS FROM HTML
// ==============================
const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

// ==============================
// STATE VARIABLES
// ==============================
let currentNumber = "0";
let previousNumber = null;
let operator = null;

// ==============================
// AUX FUNCTIONS
// ==============================

// actualizar el estado del display
function updateDisplay(text) {
  display.textContent = text;
}


//resetear la calculadora
function resetCalculator() {
  currentNumber = "0";
  previousNumber = null;
  operator = null;
  updateDisplay(currentNumber);
}


// funcion que calcula
function calculate(n1, op, n2) {
  const num1 = parseFloat(n1);
  const num2 = parseFloat(n2);

  switch (op) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 !== 0 ? num1 / num2 : "Error";
    default: return "Error";
  }
}



// ==============================
// EVENTS
// ==============================

// Evento para capturar cada boton
numButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (currentNumber === "0") currentNumber = button.textContent;
    else currentNumber += button.textContent;
    updateDisplay(currentNumber);
  });
});


// evento para capturar si es decimal el numero
decimalBtn.addEventListener("click", () => {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay(currentNumber);
  }
});


//
opButtons.forEach(button => {button.addEventListener("click", () => {
    if (operator !== null) {
      const result = calculate(previousNumber, operator, currentNumber);
      updateDisplay(result);
      previousNumber = result.toString();
    } else {
      previousNumber = currentNumber;
    }
    operator = button.textContent;
    currentNumber = "0";
  });
});

equalsBtn.addEventListener("click", () => {
  if (operator === null) return;

  const result = calculate(previousNumber, operator, currentNumber);
  updateDisplay(result);
  currentNumber = result.toString();
  previousNumber = null;
  operator = null;
});

clearBtn.addEventListener("click", resetCalculator);

backspaceBtn.addEventListener("click", () => {
  if (currentNumber.length > 1) {
    currentNumber = currentNumber.slice(0, -1);
  } else {
    currentNumber = "0";
  }
  updateDisplay(currentNumber);
});

// Inicializa display con 0 al cargar
resetCalculator();