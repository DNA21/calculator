// Initialize all buttons on calculator

let currentNum = '';
let previousNum = '';

const screen = document.getElementById('current')
const previous = document.getElementById('previous')

const btnNum = document.querySelectorAll('.btn-num');
const btnOperator = document.querySelectorAll('.btn-operator');

btnNum.forEach((button) => 
    button.addEventListener('click', () => toScreen(button.textContent)));

btnOperator.forEach((button) =>
    button.addEventListener('click', () => toOperator(button.textContent)));

function toScreen(number){
    screen.textContent += number
    currentNum += number
}

function toOperator(op){
    let operator = op;
    previousNum = currentNum;
    previous.textContent += previousNum + operator;
    currentNum = '';
    screen.textContent = currentNum;
}

// 4 main math functions

function addition (num1, num2){
    return num1 + num2;
}

function subtraction (num1, num2){
    return num1 - num2;
}

function multiplication (num1, num2){
    return num1 * num2;
}

function division (num1, num2){
    if(num2 === 0){
        return 'Error'
    } else{
        return num1/num2;
    }
}

function operate (operator, num1, num2){
    switch (operator){
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);
    }
}