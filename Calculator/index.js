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

const calculator = document.getElementById('container');
const lengthBtn = document.getElementById('lengthBtn');
const massBtn = document.getElementById('massBtn');
const calculatorBtn = document.getElementById('calculatorBtn');
const lengthConverter = document.getElementById('lengthContainer');
const massConverter = document.getElementById('massContainer');
const lengthConvertBtn = document.getElementById('lengthConvert');


lengthBtn.addEventListener('click', () => {
    calculator.style.display = "none";
    lengthBtn.style.display = "none";
    massConverter.style.display = "none"
    calculatorBtn.style.display = "block"
    lengthConverter.style.display = "flex"

})

calculatorBtn.addEventListener('click', () => {
    calculator.style.display = "flex";
    calculatorBtn.style.display = "none";
    lengthBtn.style.display = "block";
    lengthConverter.style.display = "none";
    massConverter.style.display = "none"

})

massBtn.addEventListener('click', () => {
    calculator.style.display = "none";
    lengthConverter.style.display = "none"
    massConverter.style.display = "flex"
})

// Variables to store the selected units
var fromUnit = document.getElementById("fromUnit").value;
var toUnit = document.getElementById("toUnit").value;

// Variable to store the input value
var inputValue = document.getElementById("inputValue").value;

function convertLength() {
    // Check if the input value is valid
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Get the selected units
    var fromUnit = document.querySelector("select[name='fromUnit']").value;
    var toUnit = document.querySelector("select[name='toUnit']").value;

    // Calculate the converted value
    var convertedValue = 0;

    switch (fromUnit) {
        case "meters":
            if (toUnit == "kilometers") {
                convertedValue = inputValue * 0.001;
            } else if (toUnit == "feet") {
                convertedValue = inputValue * 3.28084;
            } else if (toUnit == "inches") {
                convertedValue = inputValue * 39.3701;
            } else if (toUnit == "yards") {
                convertedValue = inputValue * 1.09361;
            }
            break;
        case "kilometers":
            if (toUnit == "meters") {
                convertedValue = inputValue * 1000;
            } else if (toUnit == "feet") {
                convertedValue = inputValue * 3280.84;
            } else if (toUnit == "inches") {
                convertedValue = inputValue * 39370.1;
            } else if (toUnit == "yards") {
                convertedValue = inputValue * 1093.61;
            }
            break;
        case "feet":
            if (toUnit == "meters") {
                convertedValue = inputValue * 0.3048;
            } else if (toUnit == "kilometers") {
                convertedValue = inputValue * 0.0003048;
            } else if (toUnit == "inches") {
                convertedValue = inputValue * 12;
            } else if (toUnit == "yards") {
                convertedValue = inputValue * 0.333333;
            }
            break;
        case "inches":
            if (toUnit == "meters") {
                convertedValue = inputValue * 0.0254;
            } else if (toUnit == "kilometers") {
                convertedValue = inputValue * 0.0000254;
            } else if (toUnit == "feet") {
                convertedValue = inputValue * 0.083333;
            } else if (toUnit == "yards") {
                convertedValue = inputValue * 0.0277778;
            }
            break;
        case "yards":
            if (toUnit == "meters") {
                convertedValue = inputValue * 0.9144;
            } else if (toUnit == "kilometers") {
                convertedValue = inputValue * 0.0009144;
            } else if (toUnit == "feet") {
                convertedValue = inputValue * 3;
            } else if (toUnit == "inches") {
                convertedValue = inputValue * 36;
            }
            break;
    }

    // Display the converted value
    document.getElementById("result").innerHTML = convertedValue.toFixed(2);
}


// Attach the event listener to the convert button
document.getElementById("lengthConvert").addEventListener("click", convertLength);


function convertMass() {
    // Check if the input value is valid
    var inputValue = parseFloat(document.getElementById("massInputValue").value);
    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Get the selected units
    var fromUnit = document.querySelector("select[name='massFromUnit']").value;
    var toUnit = document.querySelector("select[name='massToUnit']").value;

    // Calculate the converted value
    var convertedValue = 0;

    switch (fromUnit) {
        case "grams":
            if (toUnit == "kilograms") {
                convertedValue = inputValue * 0.001;
            } else if (toUnit == "pounds") {
                convertedValue = inputValue * 0.00220462;
            } else if (toUnit == "ounces") {
                convertedValue = inputValue * 0.03527396;
            }
            break;
        case "kilograms":
            if (toUnit == "grams") {
                convertedValue = inputValue * 1000;
            } else if (toUnit == "pounds") {
                convertedValue = inputValue * 2.20462;
            } else if (toUnit == "ounces") {
                convertedValue = inputValue * 35.27396;
            }
            break;
        case "pounds":
            if (toUnit == "grams") {
                convertedValue = inputValue * 453.592;
            } else if (toUnit == "kilograms") {
                convertedValue = inputValue * 0.453592;
            } else if (toUnit == "ounces") {
                convertedValue = inputValue * 16;
            }
            break;
        case "ounces":
            if (toUnit == "grams") {
                convertedValue = inputValue * 28.3495;
            } else if (toUnit == "kilograms") {
                convertedValue = inputValue * 0.0283495;
            } else if (toUnit == "pounds") {
                convertedValue = inputValue * 0.0625;
            }
            break;
    }

    // Display the converted value
    document.getElementById("massResult").innerHTML = convertedValue.toFixed(2);
}
document.getElementById("massConvert").addEventListener("click", convertMass);
