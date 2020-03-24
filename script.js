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
            case 'add':
                result = add(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case 'subtract':
                result = subtract(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case 'multiply':
                result = multiply(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;

            case 'divide':
                result = divide(numCurrent, numAfter);
                numArr.splice(0, 2, result);
                break;
                
            default:
                console.log('default')
                break;
        }    
    }
    return numArr[0];
}

// DOM Manipulation
// TODO: support for multiple digit numbers
// TODO: display calc without commas
// TODO: return result when '=' is pressed

let displayArr = [];
let result;

let numpadButtons = document.querySelectorAll('.numpad button');
numpadButtons.forEach((button) => 
    button.addEventListener('click', () => {
        displayArr.push(parseInt(button.textContent));
        changeDisplayText(displayArr);
    }
    ));

let operatorButtons = document.querySelectorAll('.operator button');
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => {
        displayArr.push(button.id);
        changeDisplayText(displayArr);
    }
    ));

function changeDisplayText(displayText) {
    let display = document.querySelector('.display');
    display.textContent = displayText;
}

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => changeDisplayText(operate(displayArr)));

// let testArr = [3, 'divide', 5, 'subtract', 10 , 'add', 2, 'multiply', 7]

// operate(testArr);

