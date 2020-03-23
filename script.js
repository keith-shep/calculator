// function operate(operator, num1, num2) {
    
// }

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

// let buttons = document.querySelectorAll('button');
// buttons.forEach((button) => 
//     button.addEventListener('click', () => changeDisplayText(button.textContent)));

// function changeDisplayText(displayText) {
//     let display = document.querySelector('.display');
//     display.textContent = displayText;
// }

// let wholeArr = [3, 'add', 5, 'subtract', 10, 'multiply', 2];

let numArr = [3, 5, 10, 2];
let operatorArr = ['divide', 'subtract', 'add'];

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


