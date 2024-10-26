// Select and name divs where buttons will be appended
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".button-container");
const upperbuttons = document.querySelector(".upper-buttons");
const upperbuttons2 = document.querySelector(".upper-buttons2");

// Creating a display
const display = document.querySelector(".display");
display.classList.add("display");

// ------------------ Define Buttons --------------------
// Define bottom three buttons
const zeroButton = document.createElement("button");
const commaButton = document.createElement("button");
const equalsButton = document.createElement("button");
zeroButton.textContent = "0";
commaButton.textContent = ",";
equalsButton.textContent = "=";
zeroButton.classList.add("zero-button");
commaButton.classList.add("comma-button");
equalsButton.classList.add("equals-button");
buttonContainer.appendChild(zeroButton);
buttonContainer.appendChild(commaButton);
buttonContainer.appendChild(equalsButton);

// Define buttons for numbers and operators
const oneButton = document.createElement("button");
const twoButton = document.createElement("button");
const threeButton = document.createElement("button");
const plusButton = document.createElement("button");
oneButton.textContent = "1";
twoButton.textContent = "2";
threeButton.textContent = "3";
plusButton.textContent = "+";
oneButton.classList.add("one-button");
twoButton.classList.add("two-button");
threeButton.classList.add("three-button");
plusButton.classList.add("plus-button");
upperbuttons.appendChild(oneButton);
upperbuttons.appendChild(twoButton);
upperbuttons.appendChild(threeButton);
upperbuttons.appendChild(plusButton);

const fourButton = document.createElement("button");
const fiveButton = document.createElement("button");
const sixButton = document.createElement("button");
const minusButton = document.createElement("button");
fourButton.textContent = "4";
fiveButton.textContent = "5";
sixButton.textContent = "6";
minusButton.textContent = "−";
fourButton.classList.add("four-button");
fiveButton.classList.add("five-button");
sixButton.classList.add("six-button");
minusButton.classList.add("minus-button");
upperbuttons2.appendChild(fourButton);
upperbuttons2.appendChild(fiveButton);
upperbuttons2.appendChild(sixButton);
upperbuttons2.appendChild(minusButton);

const sevenButton = document.createElement("button");
const eightButton = document.createElement("button");
const nineButton = document.createElement("button");
const multiplyButton = document.createElement("button");
sevenButton.textContent = "7";
eightButton.textContent = "8";
nineButton.textContent = "9";
multiplyButton.textContent = "×";
sevenButton.classList.add("seven-button");
eightButton.classList.add("eight-button");
nineButton.classList.add("nine-button");
multiplyButton.classList.add("multiply-button");
const upperbuttons3 = document.querySelector(".upper-buttons3");
upperbuttons3.appendChild(sevenButton);
upperbuttons3.appendChild(eightButton);
upperbuttons3.appendChild(nineButton);
upperbuttons3.appendChild(multiplyButton);

const clearButton = document.createElement("button");
const plusMinusButton = document.createElement("button");
const percentButton = document.createElement("button");
const divideButton = document.createElement("button");
clearButton.textContent = "C";
plusMinusButton.textContent = "±";
percentButton.textContent = "%";
divideButton.textContent = "÷";
clearButton.classList.add("clear-button");
plusMinusButton.classList.add("plus-minus-button");
percentButton.classList.add("percent-button");
divideButton.classList.add("divide-button");
const upperbuttons4 = document.querySelector(".upper-buttons4");
upperbuttons4.appendChild(clearButton);
upperbuttons4.appendChild(plusMinusButton);
upperbuttons4.appendChild(percentButton);
upperbuttons4.appendChild(divideButton);

// ------------------ Event Handling --------------------

// Function to handle button clicks and update display
function updateDisplay(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "C") {
        display.textContent = ""; // Clear the display
    } else if (buttonValue === "±") {
        if (display.textContent.startsWith("-")) {
            display.textContent = display.textContent.substring(1);
        } else {
            display.textContent = "-" + display.textContent;
        }
    } else if (buttonValue === "=") {
        calculateResult();
    } else {
        display.textContent += buttonValue;
        display.scrollLeft = display.scrollWidth;
    }
}

// Select all buttons and add event listeners
const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("click", updateDisplay);
});

// Function to evaluate and display the result
function calculateResult() {
    let expression = display.textContent;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
    
    try {
        if (/^[\d+\-*/.() ]+$/.test(expression)) {
            const result = Function(`"use strict"; return (${expression})`)();
            display.textContent = result;
        } else {
            display.textContent = "Error";
        }
    } catch (error) {
        display.textContent = "Error";
    }
}
