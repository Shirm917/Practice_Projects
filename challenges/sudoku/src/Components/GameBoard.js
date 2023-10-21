import { useState, useEffect } from "react";
import NumberBtn from "./NumberBtn";
import { makepuzzle, solvepuzzle } from "sudoku";

const GameBoard = () => {
  const [grid, setGrid] = useState([]);
  const [chosenNumber, setChosenNumber] = useState(null);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const puzzle = makepuzzle();
    // const solutionArray = solvepuzzle(puzzle);
    setGrid(puzzle);
  }, []);

  const handleCellClick = (event) => {
    const cellIndexString = event.target.id;
    const columnIndex = parseInt(cellIndexString[0]);
    const rowIndex = parseInt(cellIndexString[1]);
    const gridCopy = [...grid];
    gridCopy[columnIndex][rowIndex] = chosenNumber;
    setGrid(gridCopy);
  };

  // const puzzle = makepuzzle();
  // const solutionArray = solvepuzzle(puzzle);

  // console.log("puzzle", puzzle);
  // console.log("solution", solutionArray);

  return (
    <section className="game-board">
      <div className="sudoku-board">
        {grid.map((number, numberIndex) => {
          const thickBorders = {
            borderLeftWidth:
              numberIndex % 3 === 0 && numberIndex % 9 !== 0 ? "5px" : "0px",
            borderTopWidth:
              numberIndex >= 27 && numberIndex <= 35 ? "5px" : "1px",
            borderBottomWidth:
              numberIndex >= 45 && numberIndex <= 53 ? "5px" : "1px",
          };
          return (
            <div
              key={numberIndex}
              className="cell"
              onClick={handleCellClick}
              style={thickBorders}
            >
              {number}
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
