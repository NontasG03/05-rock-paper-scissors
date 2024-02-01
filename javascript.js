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

function playGame() {
    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt().toLowerCase();

        const computerSelection = getComputerChoice();

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
            console.log("It's a tie!");
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log("Loser! Paper beats Rock!");
            } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log("Loser! Scissors beats Paper!");
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log("Loser! Rock beats Scissors!");
            } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log("Winner! Rock beats Scissors!");
            } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log("Winner! Paper beats Rock!");
            } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log("Winner! Scissors beats Paper!");
            } else {
            console.log("skill issue");
            }
    }
        console.log(playRound(playerSelection, computerSelection));
}
}