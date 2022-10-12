// Initialize all buttons on calculator

const btn0 = document.querySelector('\\#0');
const btn1 = document.querySelector('\\#1');
const btn2 = document.querySelector('\\#2');
const btn3 = document.querySelector('\\#3');
const btn4 = document.querySelector('\\#4');
const btn5 = document.querySelector('\\#5');
const btn6 = document.querySelector('\\#6');
const btn7 = document.querySelector('\\#7');
const btn8 = document.querySelector('\\#8');
const btn9 = document.querySelector('\\#9');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const subtract = documnet.querySelector('#subtract');
const add = documnet.querySelector('#add');

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

