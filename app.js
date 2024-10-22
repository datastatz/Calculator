// Naming divs where I need to append to later on
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".button-container");
const upperbuttons = document.querySelector(".upper-buttons");
const upperbuttons2 = document.querySelector(".upper-buttons2")

const zeroButton = document.createElement("button"); // Button for 0
const commaButton = document.createElement("button"); // Button for comma
const equalsButton = document.createElement("button"); // Equals button

// Values of the bottom three values
zeroButton.textContent = "0";
commaButton.textContent = ",";
equalsButton.textContent = "=";

// Creating classes for the last three buttons
zeroButton.classList.add("zero-button");
commaButton.classList.add("comma-button");
equalsButton.classList.add("equals-button");

// Appending the buttons as children to the container div
buttonContainer.appendChild(zeroButton);
buttonContainer.appendChild(commaButton);
buttonContainer.append(equalsButton);



//-----------------
const oneButton = document.createElement("button"); // Button for 1
const twoButton = document.createElement("button"); // Button for 2
const threeButton = document.createElement("button"); //Button for 3
const plusButton = document.createElement("button"); // Plus button

// Values of the buttons
oneButton.textContent = "1";
twoButton.textContent = "2";
threeButton.textContent = "3";
plusButton.textContent = "+";

// Creating classes for the last three buttons
oneButton.classList.add("one-button");
twoButton.classList.add("two-button");
threeButton.classList.add("three-button");
plusButton.classList.add("plus-button");

// Appending the buttons as children to the container div
upperbuttons.appendChild(oneButton);
upperbuttons.appendChild(twoButton);
upperbuttons.appendChild(threeButton);
upperbuttons.append(plusButton);

// Values of the bottom three values
zeroButton.textContent = "0";
commaButton.textContent = ",";
equalsButton.textContent = "=";



//-------- adding three more buttons
const fourButton = document.createElement("button"); // Button for 4
const fiveButton = document.createElement("button"); // Button for 5
const sixButton = document.createElement("button"); // Button for 6
const minusButton = document.createElement("button"); // Minus button

// Values of the buttons
fourButton.textContent = "4";
fiveButton.textContent = "5";
sixButton.textContent = "6";
minusButton.textContent = "−";

// Creating classes for these buttons
fourButton.classList.add("four-button");
fiveButton.classList.add("five-button");
sixButton.classList.add("six-button");
minusButton.classList.add("minus-button");

// Appending the buttons as children to the upper-buttons2 div
upperbuttons2.appendChild(fourButton);
upperbuttons2.appendChild(fiveButton);
upperbuttons2.appendChild(sixButton);
upperbuttons2.append(minusButton);

//-----------------
const sevenButton = document.createElement("button"); // Button for 7
const eightButton = document.createElement("button"); // Button for 8
const nineButton = document.createElement("button"); // Button for 9
const multiplyButton = document.createElement("button"); // Multiply button

// Values of the buttons
sevenButton.textContent = "7";
eightButton.textContent = "8";
nineButton.textContent = "9";
multiplyButton.textContent = "×";

// Creating classes for these buttons
sevenButton.classList.add("seven-button");
eightButton.classList.add("eight-button");
nineButton.classList.add("nine-button");
multiplyButton.classList.add("multiply-button");

// Appending the buttons as children to the upper-buttons3 div
const upperbuttons3 = document.querySelector(".upper-buttons3");
upperbuttons3.appendChild(sevenButton);
upperbuttons3.appendChild(eightButton);
upperbuttons3.appendChild(nineButton);
upperbuttons3.append(multiplyButton);

//-----------------
const clearButton = document.createElement("button"); // Button for C
const plusMinusButton = document.createElement("button"); // Button for ±
const percentButton = document.createElement("button"); // Button for %
const divideButton = document.createElement("button"); // Divide button

// Values of the buttons
clearButton.textContent = "C";
plusMinusButton.textContent = "±";
percentButton.textContent = "%";
divideButton.textContent = "÷";

// Creating classes for these buttons
clearButton.classList.add("clear-button");
plusMinusButton.classList.add("plus-minus-button");
percentButton.classList.add("percent-button");
divideButton.classList.add("divide-button");

// Appending the buttons as children to the upper-buttons4 div
const upperbuttons4 = document.querySelector(".upper-buttons4");
upperbuttons4.appendChild(clearButton);
upperbuttons4.appendChild(plusMinusButton);
upperbuttons4.appendChild(percentButton);
upperbuttons4.append(divideButton);
