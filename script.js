'use strict';

let currentPlayer;
let compPlayer;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let optionChoose = (val) => {
    currentPlayer = val
    document.querySelector(".option").classList.add('hide');
    document.querySelector(".board").classList.remove('hide');
};

const cellClicked = (row, col) => {
    board[row][col] = currentPlayer;
    const p = document.querySelector(`.place-${row}-${col}`);
    p.textContent = String(currentPlayer);
    if(!checkWin() && !board.flat().includes('')){
        console.log("draw")
    }
    currentPlayer = currentPlayer == "X"? "O" : "X";
};

const checkWin = () => {
    for(let i = 0; i < 3 ; i++){
        if(board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
            alert("wins");
        }
    }

    for (let j = 0; j < 3; j++){
        if(board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]){
            alert("wins");
        }
    }

    if(board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        alert("wins");
    }
    if(board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        alert("wins");
    }

    if(!board.flat().includes('')){
        console.log("draw");
    }
    return true
}
