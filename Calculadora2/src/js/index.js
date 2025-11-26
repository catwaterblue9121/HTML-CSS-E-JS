let currentInput = "";

function appendNumber(number) {
    currentInput += number;  
    updateDisplay();  
}

function appendOperator(operator) {
    currentInput += " " + operator + " ";  
    updateDisplay();  
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = "Erro";
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}
