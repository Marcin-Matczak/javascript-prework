{
    const playGame = function (playerInput) {

        const getMoveName = function (moveId) {
            if (moveId == 1) {
                return 'kamień';
            } else if (moveId == 2) {
                return 'papier';
            } else if (moveId == 3) {
                return 'nożyce';
            } else {
                return 'Wykonałeś nieznany mi ruch';
            }
        }

        const displayResult = function (computerMove, playerMove) {

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

            printMessage('Zagrałem ' + computerMove + ' ,a Ty ' + playerMove + '.');
            console.log('moves:', computerMove, playerMove);

        }

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        console.log('Wylosowana liczba to: ' + randomNumber);

        const playerMove = getMoveName(playerInput);
        console.log('Gracz wpisał: ' + playerInput);

        displayResult(computerMove, playerMove);
    }

    const rockButton = document.getElementById('play-rock');
    rockButton.addEventListener('click', function () {
        playGame(1);
    });

    const paperButton = document.getElementById('play-paper');
    paperButton.addEventListener('click', function () {
        playGame(2);
    });

    const scissorButton = document.getElementById('play-scissor');
    scissorButton.addEventListener('click', function () {
        playGame(3);
    });
}
