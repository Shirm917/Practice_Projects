import { useState } from "react";

const GameBoard = () => {
  const [cells, setCells] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  return (
    <div className="game-board">
      {cells.map((cell, i) => {
        return (
          <div className="row" key={i}>
            {cell.map((subCell, j) => {
              return <div className="cell" key={j}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
