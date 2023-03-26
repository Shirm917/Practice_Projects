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
  } = useContext(AppContext);
  const { sectionNum } = props;
  const [piece, setPiece] = useState("");
  const [numArray, setNumArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [playerWent, setPlayerWent] = useState(false);

  //   const deleteNumber = (num) => {
  //       setNumArray(prevNumArray => {
  //           const filteredNumArray = prevNumArray.filter(element => element !== num);
  //           return filteredNumArray;
  //       });
  //   };

  const versusAi = () => {
    if (turnNum > 9 || piece !== "" || winnerMsg) {
      return;
    } else if (turnNum % 2 === 1) {
      setPiece("X");
      setNumArray(
        (prevNumArray) =>
        prevNumArray.filter((element) => {
          return element !== sectionNum;
        })
      );
      setTurnNum((num) => num + 1);
      setPlayerWent(true);
    }
  };

  useEffect(() => {
    if (playerWent && turnNum <= 9) {
      const randomNum = Math.floor(Math.random() * numArray.length);
      const aiChoice = numArray[randomNum];
      setNumArray((prevNumArray) =>
        prevNumArray.filter((element) => {
          return element !== aiChoice;
        })
      );
      const board = document.querySelector(".board");
      board.children[aiChoice].textContent = "O";
      setTurnNum((num) => num + 1);
    }
    setPlayerWent(false);
  }, [playerWent, numArray]);

  const addPiece = () => {
    if (turnNum > 9 || piece !== "" || winnerMsg) {
      return;
    } else if (turnNum % 2 === 0) {
      setPiece("O");
    } else if (turnNum % 2 === 1) {
      setPiece("X");
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    console.log(numArray);
  }, [numArray]);

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
    }
    setResetBoard(false);
    setNumArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
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
