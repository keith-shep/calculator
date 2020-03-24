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
// DONE: support for multiple digit numbers
// TODO: make result the first and only item in array when equals is pressed


let stagingArr = [];
let displayArr = [];

function changeDisplayText(displayText) {
    let display = document.querySelector('.display');
    display.textContent = displayText;
}

let numpadButtons = document.querySelectorAll('.numpad button');
numpadButtons.forEach((button) => 
    button.addEventListener('click', () => {
        stagingArr.push(parseInt(button.textContent));
        changeDisplayText(displayArr.concat(stagingArr));
        console.log('staging: [' + stagingArr + ']  ||' + '  display: [' + displayArr + ']');
        console.log();
    })
);

let operatorButtons = document.querySelectorAll('.operator button');
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => {

        if (stagingArr == 0) {
            // alert('staging area is empty')

        } else {
            // alert('pushing staged to display')
            displayArr.push(parseInt(stagingArr.join('').toString()));

        } 
        stagingArr = [];
        displayArr.push(button.textContent);
        changeDisplayText(displayArr.join(' '));
    })
);

let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (stagingArr == 0) {
        // alert('staging area is empty')
    } else {
        // alert('pushing staged to display')
        displayArr.push(parseInt(stagingArr.join('').toString()));
    } 
    stagingArr = [];
    changeDisplayText(operate(displayArr))
});

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    displayArr = [];
    stagingArr = [];
    changeDisplayText('0');
})