// JavaScript source code

const botChoiceDisplay = document.getElementById('botChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.weapon')
let userChoice
let botChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    generateBotChoice()
    getResult()
}))

function generateBotChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        botChoice = 'Fists'
    }
    if (randomNumber === 2) {
        botChoice = 'Dagger'
    }
    if (randomNumber === 3) {
        botChoice = 'Axe'
    }
    botChoiceDisplay.innerHTML = botChoice
}

function getResult() {

    if (botChoice === userChoice) {
        result = 'Try Again';
    }
    if (botChoice === 'Fists' && userChoice === "Dagger") {
        result = 'Praise the Sun!';
    }
    if (botChoice === 'Dagger' && userChoice === "Axe") {
        result = 'Praise the Sun!';
    }
    if (botChoice === 'Axe' && userChoice === "Fists") {
        result = 'Praise the Sun!';
    }
    if (userChoice === 'Fists' && botChoice === "Dagger") {
        result = 'YOU DIED';
    }
    if (userChoice === 'Dagger' && botChoice === "Axe") {
        result = 'YOU DIED';
    }
    if (userChoice === 'Axe' && botChoice === "Fists") {
        result = 'YOU DIED';
    }
    resultDisplay.innerHTML = result
}