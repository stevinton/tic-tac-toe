'use strict';

let currentPlayer;
let compPlayer;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let optionChoose = (val) => {
    currentPlayer = val;
    document.querySelector(".option").classList.add('hide');
    document.querySelector(".board").classList.remove('hide');
};

const cellClicked = (row, col) => {
    board[row][col] = currentPlayer;
    const p = document.querySelector(`.place-${row}-${col}`);
    p.textContent = String(currentPlayer);

    if (checkWin()) {
        console.log("Player " + currentPlayer + " wins!");
        playerWin(currentPlayer);
    } else if (draw()) {
        console.log("Draw!");
        matchDraw()
    } else {
        currentPlayer = currentPlayer == "X" ? "O" : "X";
    }
    return true
};

const checkWin = () => {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return true;
        }
    }

    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    return false;
};

const draw = () => {
    return !board.flat().includes('') && !checkWin();
}

const resetGame = () => {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = '';
    })
    document.querySelector(".option").classList.remove('hide');
    document.querySelector(".board").classList.add('hide');
}

const playerWin = (turn) => {
    alert(`Player ${turn} wins!`);
    resetGame();
}

const matchDraw = () => {
    alert(`Match Draw`);
    resetGame();
}