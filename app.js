// import functions 
import {compareNumbers} from './guess.utils.js';
//DOM elements
const input = document.getElementById('user-input');
const button = document.getElementById('button');
const attemptsLeft = document.getElementById('attempts-left');
const hotOrCold = document.getElementById('hot-cold');
const result = document.getElementById('win-loss');

// initialize state
//attemps global state
let attempts = 4;
// random number generator
const correctNumber = Math.ceil((Math.random() * 20));
//to see what the number is
console.log(correctNumber);

// set event listeners to update state and DOM
button.addEventListener('click', ()=>{
    const userGuess = Number(input.value);
    const isUserRight = compareNumbers(userGuess, correctNumber)
    
    // If user inputs correct number
    if (isUserRight === 0){
        result.textContent = 'CONGRATS YOU WON';
    // If user guess is too high
    } if (isUserRight === 1){
        hotOrCold.textContent = 'Too high,try again!';
     // If user guess is too low   
    } if (isUserRight === -1){
        hotOrCold.textContent = 'Too low, try again!';
     //If user runs out of attempts  
    } if (attempts <= 0){
        result.textContent = 'YOU LOST! TRY AGAIN!';
        return;
    }
    //Every guess lowers attempts by 1, 
    //also displays attempts left
    attempts--;
    attemptsLeft.textContent = 'Attempts Left: ' + attempts;
    



        
});