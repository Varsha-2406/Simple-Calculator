let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentValue || "0";
}

function clearDisplay() {
  currentValue = "";
  updateDisplay();
}

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
  } catch {
    currentValue = "Error";
  }
  updateDisplay();
}

function toggleSign() {
  if (currentValue.startsWith("-")) {
    currentValue = currentValue.slice(1);
  } else {
    currentValue = "-" + currentValue;
  }
  updateDisplay();
}
