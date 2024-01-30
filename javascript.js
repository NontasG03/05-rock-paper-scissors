function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    switch (randomNumber()) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

const playerSelection = prompt().toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "Loser! Paper beats Rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "Loser! Scissors beats Paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "Loser! Rock beats Scissors!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "Winner! Rock beats Scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "Winner! Paper beats Rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Winner! Scissors beats Paper!";
    } else {
        return "skill issue";
    }
}