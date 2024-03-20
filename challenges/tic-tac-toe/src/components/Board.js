import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import BoardSection from "./BoardSection";

const Board = () => {
  const {
    turnNum,
    setTurnNum,
    setWinnerMsg,
    numArray,
    setNumArray,
    playerWent,
    setPlayerWent,
  } = useContext(AppContext);

  let patterns = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (playerWent && turnNum <= 9) {
      const randomNum = Math.floor(Math.random() * numArray.length);
      const aiChoice = numArray[randomNum];
      const filteredNumArray = numArray.filter((element) => {
        return aiChoice !== element;
      });
      setNumArray(filteredNumArray);
      const board = document.querySelector(".board");
      board.children[aiChoice].textContent = "O";
      setTurnNum((num) => num + 1);
    }
    setPlayerWent(false);
  }, [playerWent]);

  useEffect(() => {
    if (turnNum >= 5 && turnNum <= 10) {
      const board = document.querySelector(".board");
      for (let i = 0; i < patterns.length; i++) {
        const piecesArr = [];
        for (let j = 0; j < patterns[i].length; j++) {
          piecesArr.push(board.children[patterns[i][j]].textContent);
        }
        const winnerCheck = piecesArr.every((element, i, arr) => {
          return element === arr[0] && element !== "";
        });
        if (winnerCheck) {
          setWinnerMsg(`${piecesArr[0]} Won!`);
        }
      }
    }
  }, [turnNum]);

  return (
    <section className="board">
      <BoardSection sectionNum={0} />
      <BoardSection sectionNum={1} />
      <BoardSection sectionNum={2} />
      <BoardSection sectionNum={3} />
      <BoardSection sectionNum={4} />
      <BoardSection sectionNum={5} />
      <BoardSection sectionNum={6} />
      <BoardSection sectionNum={7} />
      <BoardSection sectionNum={8} />
    </section>
  );
};

export default Board;
