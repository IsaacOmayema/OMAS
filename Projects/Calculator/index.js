const input = document.getElementById('input')

function one() {
    const input = document.getElementById('input')
    input.value += '1'
}
function two() {
    const input = document.getElementById('input')
    input.value += '2'
}
function three() {
    const input = document.getElementById('input')
    input.value += '3'
}
function four() {
    const input = document.getElementById('input')
    input.value += '4'
}
function five() {
    const input = document.getElementById('input')
    input.value += '5'
}
function six() {
    const input = document.getElementById('input')
    input.value += '6'
}
function seven() {
    const input = document.getElementById('input')
    input.value += '7'
}
function eight() {
    const input = document.getElementById('input')
    input.value += '8'
}
function nine() {
    const input = document.getElementById('input')
    input.value += '9'
}
/*
functions for Operation Sign
*/

function plus() {
    const input = document.getElementById('input')
    input.value += '+'
}
function subtract() {
    const input = document.getElementById('input')
    input.value += '-'
}
function divide() {
    const input = document.getElementById('input')
    input.value += '/'
}
function multiply() {
    const input = document.getElementById('input')
    input.value += '*'
}
function clearAll() {
    const input = document.getElementById('input')
    input.value = ''
}
function equalTo() {
    const input = document.getElementById('input')
    const answer = eval(input.value)
    input.value = answer
}

