//this file currently works, but only in console.
//only the restart button works, DOM uonly pdates after game is over or paused
//issue on line 18
//will replace console.log() methods with DOM methods and a UI with working buttons

const arr = ["rock", "paper", "scissors"];
const screenResult = document.getElementById('result');
const screenScore = document.getElementById('score');

//Picks from the choices in arr and stores it in computerChoice
function computerPlay() {
    let computerChoice = arr[Math.floor(Math.random() * Math.floor(3))];
    console.log(`This is computer choice: ${computerChoice}`);
    return computerChoice;
}

//Takes input from user and stores it in playerChoice
function humanPlay() {
    let playerChoice = prompt("Rock, paper, or scissors?", '').toLowerCase();
//toLowerCase breaks game if null is value, but also pauses game as a result
    while(!arr.includes(playerChoice) && playerChoice !== null) {
        playerChoice = prompt("Please try again", '').toLowerCase();
        //if(playerChoice === null) break;;
        if(arr.includes(playerChoice)) return playerChoice;
    }
    return playerChoice;
}


//Plays a single round
function playRound(playerChoice, computerChoice) {
    if(playerChoice !== computerChoice) {
        if(playerChoice == "rock" && computerChoice == "scissors") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else if(playerChoice == "paper" && computerChoice == "rock") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else if (playerChoice == "scissors" && computerChoice == "paper") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else {
            screenResult.innerHTML = `You lose! ${computerChoice} beats ${playerChoice}!`;
        }
    } else {
        screenResult.innerHTML = `Tie! Both players chose ${playerChoice}`;
    }
    return screenResult;//.innerHTML;
}

function victory() {
    const win = "You won the game! Congratulations!";
    console.log(screenResult.innerHTML);
    console.log(screenScore.innerHTML);
    return screenResult.innerHTML = win; 
}

function defeat() {
    const lose = "You lost the game! Sorry!";
    console.log(screenResult.innerHTML);
    console.log(screenScore.innerHTML);
    return screenResult.innerHTML = lose;
}

/*
function update() {
    const screenResult = document.getElementById('result');
    const screenScore = document.getElementById('score'); 
}
*/
//no idea where o put this or why it doesnt work
//everthing works now except the playerChoice.toLowerCase == null issue
//and the html not updating between prompts.

function game() {
    let playerScore = 0,
        computerScore = 0;
        let total = `You: ${playerScore} | Computer: ${computerScore}`;
    for(let i = 0; playerScore <= 5 && computerScore <= 5; i++) {
        playRound(humanPlay(), computerPlay());
        if(screenResult.textContent.includes("win")) {
            total = `You: ${++playerScore} | Computer: ${computerScore}`;
            screenScore.innerHTML = total;
        } else if(screenResult.textContent.includes("lose")) {
            total = `You: ${playerScore} | Computer: ${++computerScore}`;
            screenScore.innerHTML = total;
        } else if(screenResult.textContent.includes("Tie")) {
            total = `You: ${playerScore} | Computer: ${computerScore}`;
            screenScore.innerHTML = total;
        }
        
        if(playerScore == 5) {
            victory();
            return;
        } else if(computerScore == 5) {
            defeat();
            return;
        }
        console.log(screenResult.innerHTML);
        console.log(total);
    }
}

const restart = document.getElementById('restart');
restart.addEventListener('click', game);
//window.addEventListener('input', update());
game();