const display = document.getElementById('display');

function addNumber(number) {
    const currentNumber = display.value;
    display.value = currentNumber + number;
}

function addOperator(operator) {
    const currentNumber = display.value;
    display.value = currentNumber + operator;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    const currentExpression = display.value;
    display.value = currentExpression.slice(0, -1);
}

function appendToDisplay(character) {
    display.value += character;
}

function calculate() {
    const currentExpression = display.value;
    try {
        const result = eval(currentExpression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add event listener for keyup
document.addEventListener('keyup', (event) => {
    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        addNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        addOperator(key);
    } else if (key === '.') {
        addOperator('.');
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key == '=') {
        calculate();
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    }
});
