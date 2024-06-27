let operation = undefined;
let currentOperand = "";
let previousOperand = "";
let display = document.getElementById("display");

function clearDisplay(){
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    display.value = "0";
}

function appendToDisplay(value){
    if (value === '.' && currentOperand.includes('.')) 
        return;
    if (currentOperand === '0' && value !== '.') 
        currentOperand = value.toString();
    else
        currentOperand = currentOperand.toString() + value.toString();
    updateDisplay();
}

function deleteLast(){
    if (currentOperand !== "") {
        currentOperand = currentOperand.slice(0, -1);
        if (currentOperand === "") {
            display.value = "0";
        } else {
            updateDisplay();
        }
    }
}

function chooseOperation(operator){
    if (currentOperand === '') 
        return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate(){
    let answer;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operation){
        case '+':
            answer = prev + current;
            break;
        case '-':
            answer = prev - current;
            break;
        case '*':
            answer = prev * current;
            break;
        case '/':
            answer = prev / current;
            break;
        default:
            return;
    }
    currentOperand = answer.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay(){
    display.value = currentOperand || '0';
}

clearDisplay();
