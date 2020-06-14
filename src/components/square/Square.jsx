import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './square.css';

function Square(props) {
  const [player, playerHandler] = useState(null);

  const changeValue = () => {
    if (player === null && props.winner === null) {
      const squarePlayer = props.changePlayer();
      props.setSquare(props.value, squarePlayer);
      playerHandler(squarePlayer);
    }
  };

  return (
    <button
      className={`square ${player ? `square-${player}` : ''}`}
      onClick={changeValue}
      type="button"
    >
      { player }
    </button>
  );
}

Square.propTypes = {
  changePlayer: PropTypes.func.isRequired,
  setSquare: PropTypes.func.isRequired,
  winner: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Square;
