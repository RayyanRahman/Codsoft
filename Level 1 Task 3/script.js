const resultField = document.getElementById("result");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let currentInput = "";
let operator = "";

// Event listeners for number and operator buttons
const buttons = document.querySelectorAll(".number, .operator, .decimal");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.getAttribute("data-value"));
  });
});

// Event listener for the clear button
clearButton.addEventListener("click", clearInput);

// Event listener for the calculate button
calculateButton.addEventListener("click", calculate);

// Function to handle button clicks
function handleButtonClick(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (operator === "") {
      operator = value;
      currentInput += value;
    }
  } else {
    if (value === "." && currentInput.includes(".")) {
      return; // Prevent adding multiple decimals
    }
    currentInput += value;
  }
  resultField.value = currentInput;
}

// Function to clear the input
function clearInput() {
  currentInput = "";
  operator = "";
  resultField.value = "0";
}

// Function to calculate and display the result
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    resultField.value = currentInput;
  } catch (error) {
    resultField.value = "Error";
    setTimeout(clearInput, 1500);
  }
}
