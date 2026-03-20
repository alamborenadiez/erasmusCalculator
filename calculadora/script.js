const display = document.getElementById("display");

const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op");
const decimalBtn = document.querySelector(".decimal");

const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

let currentNumber = "";
let operation = []; // [num1, operator, num2]

function updateDisplay(value){
  display.textContent = value;
}

/* NUMBER CLICK */
numButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    currentNumber += btn.textContent;
    updateDisplay(currentNumber);
  });
});

/* DECIMAL */
decimalBtn.addEventListener("click", ()=>{

  if(!currentNumber.includes(".")){
    currentNumber += ".";
    updateDisplay(currentNumber);
  }

});

/* OPERATOR */
opButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{

    if(currentNumber === "") return;

    operation.push(currentNumber);
    operation.push(btn.textContent);

    currentNumber = "";

  });
});

/* EQUALS */
equalsBtn.addEventListener("click", ()=>{

  if(currentNumber === "") return;

  operation.push(currentNumber);

  let num1 = Number(operation[0]);
  let operator = operation[1];
  let num2 = Number(operation[2]);

  let result = 0;

  if(operator === "+") result = num1 + num2;
  if(operator === "-") result = num1 - num2;
  if(operator === "*") result = num1 * num2;
  if(operator === "/") result = num1 / num2;

  updateDisplay(result);

  currentNumber = result.toString();
  operation = [];

});

/* CLEAR */
clearBtn.addEventListener("click", ()=>{
  currentNumber = "";
  operation = [];
  updateDisplay(0);
});