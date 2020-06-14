import React, { useState } from 'react';
import Square from '../square/Square';

import './board.css';

function Board() {
  const [status, statusHandler] = useState('0');
  const [squares, squaresHandler] = useState(Array(9).fill(null));
  const calcWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calcWinner();

  const changePlayer = () => {
    const player = status;
    if (status === '0') {
      statusHandler('X');
    } else {
      statusHandler('0');
    }
    return player;
  };

  const setSquare = (i, player) => {
    const newSquares = [...squares];
    newSquares[i] = player;
    squaresHandler([...newSquares]);
  };

  const renderSquare = (i) => (
    <Square
      value={i}
      changePlayer={changePlayer}
      setSquare={setSquare}
      winner={winner}
    />
  );

  const renderStatus = () => {
    if (winner) {
      return `WINNER ${winner}`;
    }

    return status === '0' ? 'Next player: X' : 'Next player: Y';
  };

  return (
    <div className="board">
      <div className="status">
        {renderStatus()}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
