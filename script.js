// Initialize all buttons on calculator

let currentNum = '';
let previousNum = '';

const screen = document.getElementById('current')
const previous = document.getElementById('previous')

const btnNum = document.querySelectorAll('.btn-num');
const btnOperator = document.querySelectorAll('.btn-operator');
const equals = document.getElementById('equals');
const decimal = document.getElementById('dot');
const clear = document.getElementById('clear')

btnNum.forEach((button) => 
    button.addEventListener('click', () => toScreen(button.textContent)));

btnOperator.forEach((button) =>
    button.addEventListener('click', () => toOperator(button.textContent)));

equals.addEventListener('click', () => {
    if(currentNum != '' && previousNum != ''){
        calculate();
    }})

clear.addEventListener('click', clearCalc)

function toScreen(number){
    screen.textContent += number
    currentNum += number
}

function toOperator(op){
    operator = op;
    previousNum = currentNum;
    previous.textContent += previousNum + ' ' + operator;
    currentNum = '';
    screen.textContent = currentNum;
}

function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+'){
        currentNum = previousNum += currentNum;
    } else if (operator === '-'){
        currentNum = previousNum -= currentNum;
    } else if(operator === '*'){
        currentNum = previousNum * currentNum;
    } else if (operator === '/'){
        if (currentNum === 0){
            alert('Cannot divide by zero')
        } else{
            currentNum = previousNum / currentNum;
        }
    }
    screen.textContent = '';
    previous.textContent = '';
    screen.textContent += currentNum;
}

function clearCalc(){
    screen.textContent = '';
    previous.textContent = '';
    currentNum = '';
    previousNum = '';
}

// Needs operator check so no more than 1 operator will display and work at a time
// decimal
// round numbers
