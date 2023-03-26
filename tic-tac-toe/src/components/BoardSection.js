import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const BoardSection = (props) => {
  const {
    turnNum,
    setTurnNum,
    resetBoard,
    setResetBoard,
    gameType,
    setGameType,
    winnerMsg,
    setWinnerMsg,
    numArray,
    setNumArray,
    setPlayerWent,
  } = useContext(AppContext);
  const { sectionNum } = props;
  const [piece, setPiece] = useState("");

  const versusAi = () => {
    if (turnNum > 9 || piece !== "" || winnerMsg) {
      setTurnNum((num) => num + 1);
      return;
    } else if (turnNum % 2 === 1) {
      setPiece("X");
      const filteredNumArray = numArray.filter((element) => {
        return sectionNum !== element;
      });
      setNumArray(filteredNumArray);
      setTurnNum((num) => num + 1);
      setPlayerWent(true);
    }
  };

  const addPiece = () => {
    if (turnNum > 9 || piece !== "" || winnerMsg) {
      setTurnNum((num) => num + 1);
      return;
    } else if (turnNum % 2 === 0) {
      setPiece("O");
    } else if (turnNum % 2 === 1) {
      setPiece("X");
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    if (resetBoard) {
      setPiece("");
      const board = document.querySelector(".board");
      for (const child of board.children) {
        child.textContent = "";
      }
      setWinnerMsg("");
      setGameType("");
      setTurnNum(1);
      setNumArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
      setResetBoard(false);
    }
  }, [resetBoard]);

  return (
    <div
      className="boardSection"
      onClick={gameType === "" ? null : gameType === "Ai" ? versusAi : addPiece}
    >
      {piece}
    </div>
  );
};

export default BoardSection;
