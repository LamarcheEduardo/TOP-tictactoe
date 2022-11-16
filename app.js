//Selecting squares from the HTML, in order to manipulate them using the DOM.
const squares = document.getElementsByClassName('square')
const msg = document.getElementById('msg')


//Game Object
const myGame = {
    gameBoard: [],
    playerOne: {name: 'Eduardo', value: 'X'},
    playerTwo: {name: 'Miguel', value: 'O'},
    winner: false,
    setWinner: function(){
        return this.winner = true
    },
    turn: true //create a function to asign this value.
}

function selectedSquares() {
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', () => {
            if(myGame.winner == true) {
                return null
            } else {
                if(myGame.turn == true){
                    myGame.gameBoard[i] = myGame.playerOne.value
                    msg.innerText = `${myGame.playerTwo.name} turn`
                    render() 
                    setTurn()
                    checkStatus();
                    
                } else if(myGame.turn == false) {
                    myGame.gameBoard[i] = myGame.playerTwo.value
                    msg.innerText = `${myGame.playerOne.name} turn`
                    render();
                    setTurn()
                    checkStatus();
                } 
            }
        }, {once: true}) 
    }
}
    

function setTurn() {
    if(myGame.turn == true) {
        myGame.turn = !myGame.turn
    } else if(myGame.turn == false) {
        myGame.turn = !myGame.turn
    }
    
}

function render() {
    console.log(myGame.gameBoard)
    for(let i = 0; i < myGame.gameBoard.length; i++){
        if(myGame.gameBoard[i] == undefined) {
           myGame.gameBoard[i] = ''
        } else if(myGame.gameBoard.length <= 9) {
                squares[i].innerText = myGame.gameBoard[i]
        }
    }
   
}

function checkStatus(){
    if(myGame.gameBoard[0] == 'X' && myGame.gameBoard[1] == 'X' && myGame.gameBoard[2] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[0] == 'O' && myGame.gameBoard[1] == 'O' && myGame.gameBoard[2] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[0] == 'O' && myGame.gameBoard[3] == 'O' && myGame.gameBoard[6] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[0] == 'X' && myGame.gameBoard[3] == 'X' && myGame.gameBoard[6] == 'X'){
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[0] == 'X' && myGame.gameBoard[4] == 'X' && myGame.gameBoard[8] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[0] == 'O' && myGame.gameBoard[4] == 'O' && myGame.gameBoard[8] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[3] == 'O' && myGame.gameBoard[4] == 'O' && myGame.gameBoard[5] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[3] == 'X' && myGame.gameBoard[4] == 'X' && myGame.gameBoard[5] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[6] == 'X' && myGame.gameBoard[7] == 'X' && myGame.gameBoard[8] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[6] == 'O' && myGame.gameBoard[7] == 'O' && myGame.gameBoard[8] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[1] == 'O' && myGame.gameBoard[4] == 'O' && myGame.gameBoard[7] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[1] == 'X' && myGame.gameBoard[4] == 'X' && myGame.gameBoard[7] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[2] == 'X' && myGame.gameBoard[5] == 'X' && myGame.gameBoard[9] == 'X') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } else if(myGame.gameBoard[2] == 'O' && myGame.gameBoard[5] == 'O' && myGame.gameBoard[9] == 'O') {
        setTimeout(() => {
            myGame.setWinner()
        }, 100)
    } 
}


function init(){
    if(myGame.winner === true){
        msg.innerText = 'Welcome';
    } else {
        msg.innerText = `${myGame.playerOne.name} turn`
        selectedSquares();
    }
}

init();