import { useState } from "react";
import NumberBtn from "./NumberBtn";

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
  const [chosenNumber, setChosenNumber] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="game-board">
      <div className="sudoku-board">
        {grid.map((column, colIndex) => {
          return (
            <div className="column" key={colIndex}>
              {column.map((number, rowIndex) => {
                return (
                  <div className="cell" key={rowIndex}>
                    {number === 0 ? "" : number}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="number-btns-container">
        {numbers.map((number, index) => {
          return (
            <NumberBtn
              key={index}
              number={number}
              chosenNumber={chosenNumber}
              setChosenNumber={setChosenNumber}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GameBoard;
