import { useState } from "react";

const GameBoard = () => {
  const [grid, setGrid] = useState([
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
      {grid.map((column, colIndex) => {
        return (
          <div className="column" key={colIndex}>
            {column.map((number, rowIndex) => {
              return <div className="cell" key={rowIndex}>{number === 0 ? "" : number}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
