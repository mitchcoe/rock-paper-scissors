const arr = ["rock", "paper", "scissors"];

//Picks from the choices in arr and stores it in computerChoice
function computerPlay() {
    let computerChoice = arr[Math.floor(Math.random() * Math.floor(3))];
    return computerChoice;
}

//Takes input from user and stores it in playerChoice
function humanPlay() {
    let playerChoice = prompt("Rock, paper, or scissors?", '').toLowerCase();
    while(!arr.includes(playerChoice)) {
        if(playerChoice === null) {
            break;
        }
        playerChoice = prompt("Please try again", '').toLowerCase();
        if(arr.includes(playerChoice)) {
            return playerChoice;
        }
    }
    return playerChoice;
}

//Plays a single round
function playRound(playerChoice, computerChoice) {
    if(playerChoice !== computerChoice) {
        if(playerChoice == "rock" && computerChoice == "scissors") {
            result = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else if(playerChoice == "paper" && computerChoice == "rock") {
            result = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else if (playerChoice == "scissors" && computerChoice == "paper") {
            result = `You win! ${playerChoice} beats ${computerChoice}!`;
        } else {
            result = `You lose! ${computerChoice} beats ${playerChoice}!`;
        }
    } else {
        result = "Tie!";
    }
    return result;
}
//important to pass humanPlay and computerPlay functions in as arguments for playRound,
//otherwise, playRound cannot access playerChoice and computerChoice

function game() {
    let win = "You won the game! Congratulations!";
    let lose = "You lost the game! Sorry!";
    for(let i = 0, playerScore=0, computerScore=0; playerScore <= 5 && computerScore <= 5; i++) {
        let score = `You: ${playerScore} | Computer: ${computerScore}`;
        console.log(score);
        playRound(humanPlay(), computerPlay());
        if(result.includes("win")) {
            ++playerScore;
            console.log(result);
        } else if(result.includes("lose")) {
            ++computerScore;
            console.log(result);
        } else if(result.includes("Tie")) {
            playerScore = playerScore;
            computerScore = computerScore;
            console.log(result);
        }
        
        if(playerScore == 5) {
            let final = win;
            console.log(final);
            alert(final);
            return final;
        } else if(computerScore == 5) {
            let final = lose;
            console.log(final)
            alert(final);
            return final;
        }
    }
}

function restart() {
    game();
}

game();