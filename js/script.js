function getMoveName(moveId) {
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2) {
        return 'papier';
    } else if (moveId == 3) {
        return 'nożyce';
    } else
        return 'wykonałeś nieznany mi ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
    if (randomNumber == 1) {
        computerMove = 'kamień';
    } else if (randomNumber == 2) {
        computerMove = 'papier';
    } else if (randomNumber == 3) {
        computerMove = 'nożyce'
    }

    printMessage('Mój ruch to: ' + computerMove);
*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');



console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ja wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ja wygrywam!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Ja wygrywam!');
} else if (playerMove == 'nieznany ruch') {
    printMessage('Wykonałeś nieprawidłowe posunięcie!');
} else {
    printMessage('Mamy remis!!')
}
*/

console.log('moves:', computerMove, playerMove);

function displayResult(computerMove, playerMove) {

    if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Tym razem przegrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Tym razem przegrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Tym razem przegrywasz!');
    } else if (playerMove == computerMove) {
        printMessage('Mamy remis!!');
    } else {
        printMessage('Wykonałeś nieprawidłowe posunięcie!');
    }
}

displayResult(computerMove, playerMove);

printMessage('Zagrałem ' + computerMove + ' ,a Ty ' + playerMove + '.');

