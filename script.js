function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(wholeArr) {
    let numArr = wholeArr.filter((item) => !isNaN(item));
    let operatorArr = wholeArr.filter((item) => isNaN(item));

    for (let i = 0; i < operatorArr.length; i++) {
        operatorCurrent = operatorArr[i]
        numCurrent = numArr[0];
        numAfter = numArr[1];

        switch (operatorCurrent) {
            case '+':
                result = add(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case '-':
                result = subtract(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case '*':
                result = multiply(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case '÷':
                result = divide(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;
                
            default:
                console.log('Enter number')
                break;
        }    
    }
    return numArr[0];
}

// DOM Manipulation

// DONE: return result when '=' is pressed
// DONE: change 'sum' to '+' and for other operators
// DONE: display calc without commas
// TODO: support for multiple digit numbers

let displayArr = [];

let numpadButtons = document.querySelectorAll('.numpad button');
numpadButtons.forEach((button) => 
    button.addEventListener('click', () => {
        displayArr.push(parseInt(button.textContent));
        changeDisplayText(displayArr.join(' '));
    })
);

let operatorButtons = document.querySelectorAll('.operator button');
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => {
        displayArr.push(button.textContent);
        changeDisplayText(displayArr.join(' '));
    })
);

function changeDisplayText(displayText) {
    let display = document.querySelector('.display');
    display.textContent = displayText;
}

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => changeDisplayText(operate(displayArr)));

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayArr = [];
    changeDisplayText('0');
})

// let testArr = [3, 'divide', 5, 'subtract', 10 , 'add', 2, 'multiply', 7]

// operate(testArr);

