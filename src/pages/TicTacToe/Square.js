import React from 'react';
import Buttons from './Buttons';

const Square = (props) => {
  const {squares, onClick, winningSquares} = props;
  const style = {
    display: "inline-grid",
    gridTemplate: "repeat(3,1fr) / repeat(3, 1fr)",
    border: "1px solid #ccc",
    height: "100%",
  };
  return (
    <div style={style}>
      {
        squares.map((square, index) => (
          <Buttons key={index} value={square} onClick={()=> onClick(index)} isWinning={winningSquares.includes(index)}/>
        ))
      }
    </div>
  );
}

export default Square;