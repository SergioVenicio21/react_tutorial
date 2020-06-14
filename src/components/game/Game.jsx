import React from 'react';

import Board from '../board/Board';

import './game.css';

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
