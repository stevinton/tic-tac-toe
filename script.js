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
    compPlayer = currentPlayer === "X" ? "O" : "X";
    document.querySelector(".option").classList.add('hide');
    document.querySelector(".board").classList.remove('hide');
};

const cellClicked = (row, col) => {
    board[row][col] = currentPlayer;
    const p = document.querySelector(`.place-${row}-${col}`);
    p.textContent = String(currentPlayer);
    compChance();
};

const compChance = () => {
    let crow, ccol;
    do {
        crow = Math.floor(Math.random() * 3);
        ccol = Math.floor(Math.random() * 3);
    } while (board[crow][ccol] !== '');

    board[crow][ccol] = compPlayer;
    const p = document.querySelector(`.place-${crow}-${ccol}`);
    p.textContent = String(compPlayer);
};
