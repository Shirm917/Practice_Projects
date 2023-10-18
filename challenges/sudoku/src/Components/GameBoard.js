import { useState } from "react";
import NumberBtn from "./NumberBtn";
import { logDOM } from "@testing-library/react";

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

  const handleCellClick = (event) => {
    const cellIndexString = event.target.id;
    const columnIndex = parseInt(cellIndexString[0]);
    const rowIndex = parseInt(cellIndexString[1]);
    const gridCopy = [...grid];
    gridCopy[columnIndex][rowIndex] = chosenNumber;
    setGrid(gridCopy);
  };

  return (
    <section className="game-board">
      <div className="sudoku-board">
        {grid.map((column, colIndex) => {
          return (
            <div key={colIndex}>
              {column.map((number, rowIndex) => {
                const dividerLineArr = [2, 5];
                return (
                  <div
                    key={rowIndex}
                    id={`${colIndex}${rowIndex}`}
                    style={{borderBottomWidth: dividerLineArr.includes(rowIndex) ? "5px" : "1px", borderRightWidth: dividerLineArr.includes(colIndex) ? "5px" : "1px" }}
                    className="cell"
                    onClick={handleCellClick}
                  >
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
