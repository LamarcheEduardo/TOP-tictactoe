const square = document.getElementsByClassName('square')

const myGame = {
    gameBoard: [],
    playerOne: {name: 'Eduardo', value: 'X'},
    playerTwo: {name: 'Miguel', value: 'O'},
    turn: true //create a function to asign this value.
}

function selectedSquares(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('click', () => {
            if(myGame.turn == true){
               //I should call the render method and then check for value
                myGame.gameBoard[i] = myGame.playerOne.value
                
                render() 
                setTurn()
            } else if(myGame.turn == false) {
                myGame.gameBoard[i] = myGame.playerTwo.value
                render();
                setTurn()
            }
        }, {once: true})
    }
}

selectedSquares();

function setTurn(){
    if(myGame.gameBoard.length <= 9){
        if(myGame.turn == true) {
            myGame.turn = !myGame.turn
        } else if(myGame.turn == false) {
            myGame.turn = !myGame.turn
        }
    }
}

function render() {
    console.log(myGame.gameBoard)
    for(let i = 0; i < myGame.gameBoard.length; i++){
        if(myGame.gameBoard[i] == undefined) {
           myGame.gameBoard[i] = ''
        } else if(myGame.gameBoard.length <= 9) {
                square[i].innerText = myGame.gameBoard[i]
        }
    }
   
}

