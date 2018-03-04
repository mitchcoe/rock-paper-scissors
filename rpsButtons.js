const screenResult = document.getElementById('result');
const screenScore = document.getElementById('score');

let playerScore = 0;
let compScore = 0;

function chooseBtn() {
    let button = document.getElementsByClassName('button')
    let rock = document.get
    let btnArr = [...button];

    btnArr.forEach(element => {
        element.addEventListener('click', (event) => {
            playRound(playerChoice(), computerChoice());
        });
    });
}

function playerChoice() {
    return event.target.value;
}

function computerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let computer = arr[Math.floor(Math.random() * Math.floor(3))];
    return computer;
}

function playRound(playerChoice, computerChoice) {
    let total = `You: ${playerScore} | Computer: ${compScore}`;

    if(playerScore === 5) {
        victory();
        return;
    } else if(compScore === 5) {
        defeat();
        return;
    }

    if(playerChoice !== computerChoice) {
        if(playerChoice == "rock" && computerChoice == "scissors") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
            total = `You: ${++playerScore} | Computer: ${compScore}`;
            screenScore.innerHTML = total;
        } else if(playerChoice == "paper" && computerChoice == "rock") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
            total = `You: ${++playerScore} | Computer: ${compScore}`;
            screenScore.innerHTML = total;
        } else if (playerChoice == "scissors" && computerChoice == "paper") {
            screenResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
            total = `You: ${++playerScore} | Computer: ${compScore}`;
            screenScore.innerHTML = total;
        } else {
            screenResult.innerHTML = `You lose! ${computerChoice} beats ${playerChoice}!`;
            total = `You: ${playerScore} | Computer: ${++compScore}`;
            screenScore.innerHTML = total;
        }
    } else {
        screenResult.innerHTML = `Tie! Both players chose ${playerChoice}`;
    }
}

function victory() {
    const win = "You won the game! Congratulations!";
    return screenResult.innerHTML = win; 
}

function defeat() {
    const lose = "You lost the game! Sorry!";
    return screenResult.textContent = lose;
}

function restart() {
    let restart = document.getElementById('restart');
    restart.addEventListener('click', () => {
        screenResult.innerHTML = '';
        screenScore.innerHTML = 'You: 0 | Computer: 0';
        playerScore = 0;
        compScore = 0;
    });
    
}

function btnEvents() {
    chooseBtn();
    restart();
}

window.onload = btnEvents();