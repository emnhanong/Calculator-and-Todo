import React, { useState } from "react";
import Square from "./Square";
import Title from "../../components/Title/Title";
import "../TicTacToe/TicTacToe.css";
const TicTacToe = () => {
  const initState = Array(9).fill(null);
  const [history, setHistory] = useState([initState]);
  const [coordinatesHistory, setCoordinatesHistory] = useState([[]]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXO, setIsXO] = useState(true);
  const [toggle, setToggle] = useState(false);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (index) => {
    const historyClone = [...history[stepNumber]];
    const coordinates = getCoordinates(listWinnerLines, index);
    if (winner || historyClone[index]) return;
    historyClone[index] = isXO ? "X" : "O";
    const timeInHistory = history.slice(0, stepNumber + 1);
    const timeInCoordinate = coordinatesHistory.slice(0, stepNumber + 1);
    setHistory([...timeInHistory, historyClone]);
    setCoordinatesHistory([...timeInCoordinate, coordinates]);
    setStepNumber(timeInHistory.length);
    setIsXO(!isXO);
  };

  const moveToStep = (step) => {
    setStepNumber(step);
    setIsXO(step % 2 === 0);
  };

  const toggleHistory = () => {
    setToggle(!toggle);
  };

  const renderHistory = () => {
    return history.map((step, move) => {
      const destination = move
        ? `Go to move# ${move} (${coordinatesHistory[move]})`
        : "Go to start (0,0)";
      return (
        <li key={move} className="list-history">
          <button className="move-btn" onClick={() => moveToStep(move)}>
            {destination}
          </button>
        </li>
      );
    });
  };

  const handleReset = () => {
    setIsXO(true);
    setStepNumber(0);
    setHistory([initState]);
  };

  const renderReset = (name) => {
    return (
      <button className="btn-reset" onClick={handleReset}>
        {name}
      </button>
    );
  };

  const getWinner = () => {
    if (winner) {
      return winner.isWinner;
    }
  };

  const handleCheckDraw = () => {
    let count = 0;
    history.forEach(function (item) {
      if (item !== null) {
        count++;
      }
    });
    if (count === 10 && winner === null) {
      return <h1>Draw!</h1>;
    }
  };

  const handleCheckWinner = () => {
    if (winner) {
      return "Winner: " + getWinner();
    } else {
      return "Next player: " + (isXO ? "X" : "O");
    }
  };

  return (
    <div className="wrap-tictactoe">
      <Title title="My Tictactoe" />
      <div className="wrap-all">
        <div className="wrap-left">
          <Square
            squares={history[stepNumber]}
            onClick={handleClick}
            winningSquares={winner ? winner.line : []}
          />
          <div className="wrap-text">
            <h2>{winner ? `"${getWinner()}"  is Winner` : ""}</h2>
            <div>{handleCheckDraw()}</div>
            <div>
              {winner || handleCheckDraw()
                ? renderReset("Play again")
                : renderReset("Reset Game")}
            </div>
          </div>
        </div>
        <div></div>
        <div className="text-right">
          <div className="check-winner">{handleCheckWinner()}</div>
          <button className="toggle" onClick={toggleHistory}>
            Toggle Moves
          </button>
          <div>
            <ul>{toggle ? renderHistory().reverse() : renderHistory()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const listWinnerLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares) => {
  for (let index = 0; index < listWinnerLines.length; index++) {
    const [a, b, c] = listWinnerLines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        isWinner: squares[a],
        line: [a, b, c],
      };
    }
  }
  return null;
};

const getCoordinates = (array, char) => {
  for (let i = 0; i < array.length; i++) {
    const i2 = array[i].indexOf(char);
    if (i2 !== -1) return [i + 1, i2 + 1];
  }
  return undefined;
};

export default TicTacToe;
