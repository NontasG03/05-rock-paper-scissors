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