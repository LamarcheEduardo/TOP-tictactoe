//Selecting squares from the HTML, in order to manipulate them using the DOM.
const squares = Array.from(document.getElementsByClassName('space'))
const playerOneName = document.getElementById('playerOne');
const playerTwoName = document.getElementById('playerTwo');
const msg = document.getElementById('msg')

//Game Object
const gameController = {
    gameBoard: ["", "", "", "", "", "", "", "", ""],
    playerOne: {name: '', value: 'X'},
    playerTwo: {name: '', value: 'O'},
    setPlayersName: function(){
        this.playerOne.name = playerOneName.value;
        this.playerTwo.name = playerTwoName.value;
    },
    currentPlayer: 'X',
    isGameActive: true,
}


function handleClick(){
    gameController.playerOne.name = playerOneName.value;
    gameController.playerTwo.name = playerTwoName.value;
    msg.innerText = `${gameController.playerOne.name}'s turn`
    initGame();
}
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const isValid = (square) => {
    if(square.innerText === 'X' || square.innerText === 'O'){
        return false;
    } else {
    return true;
    }
}

const updateBoard = (index) => {
    gameController.gameBoard[index] = gameController.currentPlayer;
}


function handleResultValidation() {
    let roundWon = false;
    for(let i = 0; i <= 7; i++) {
        const winningConditions = winningCombinations[i]
        const a = gameController.gameBoard[winningConditions[0]];
        const b = gameController.gameBoard[winningConditions[1]];
        const c = gameController.gameBoard[winningConditions[2]];
        if( a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c){
            roundWon = true;
            break;
        }
    }
    if(roundWon) {
        weHaveAWinner(gameController.currentPlayer === 'X' ? 'playerX' : 'playerO');
        gameController.isGameActive = false;
        return;
    }
    if(!gameController.gameBoard.includes(''))
    gameController.isGameActive = false;
    weHaveAWinner('tie');
}

const weHaveAWinner = (value) => {

    const playerX = `${gameController.playerOne.name} has won the game`
    const playerO = `${gameController.playerTwo.name} has won the game!`;
    const tie = 'TIE'

    switch (value) {
        case 'playerO':
            msg.innerHTML = `${playerX}`;
            break;
        case 'playerX':
            msg.innerHTML = `${playerO}`;
            break;
        case 'tie':
            msg.innerText = 'Tie'
    }
    return {playerX, playerO, tie}
}

function changePlayer(){
    gameController.currentPlayer = gameController.currentPlayer === 'X' ? 'O' : 'X';
    if(gameController.isGameActive){
        if(gameController.currentPlayer === 'X'){
            msg.innerText = `${gameController.playerOne.name}'s turn`
        } else {
            handleResultValidation();
            msg.innerText = msg.innerText = `${gameController.playerTwo.name}'s turn`
        }
    } else {
       handleResultValidation();
    }
}

const userAction = (square, index) => {
    if(isValid(square) && gameController.isGameActive){
        square.innerText = gameController.currentPlayer;
        square.innerText = `${gameController.currentPlayer}`
        updateBoard(index)
        handleResultValidation();
        changePlayer();
    }
}

function initGame(){
    if(gameController.isGameActive){
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {
                userAction(square, index)
            });
    });
    } else {
        return 
    }
}


 const resetGame = () => {
    gameController.gameBoard = ["", "", "", "", "", "", "", "", ""] 
    gameController.isGameActive = true;
    if(gameController.currentPlayer === 'O') {
        changePlayer();
    } else if(gameController.playerOne.name === ''){
       
    } else {
        msg.innerText = `${gameController.playerOne.name}'s turn`
    }
    squares.forEach(square => {
        square.innerText = ''
    })
 }