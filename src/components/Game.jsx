import React, {useState} from 'react';
import './Game.css';
import Board from './Board';
import {calculateWinner} from '../winner';


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

const startNewGame = () => (
    <button className="startNewGame" onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
);
    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
        </div>
    )
}

export default Game;