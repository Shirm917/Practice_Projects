import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const BoardSection = (props) => {
  const { turnNum, setTurnNum, resetBoard, setResetBoard, gameType } =
    useContext(AppContext);
  const { num } = props;
  const [piece, setPiece] = useState("");
  const [numArray, setNumArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [playerWent, setPlayerWent] = useState(false);

  const versusAi = () => {
    if (turnNum > 9 || piece !== "") {
      return;
    } else if (turnNum % 2 === 1) {
      setPiece("X");
      console.log("num", num);
      setNumArray(numArray.filter((element) => {
        return element !== num;
    }));
      setPlayerWent(true);
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    console.log("playerWentUseEffect", numArray);
    if (playerWent) {
      console.log("numArray in useEffect", numArray);
      const randomNum = Math.floor(Math.random() * numArray.length);
      const aiChoice = numArray[randomNum];
      setNumArray(numArray.filter((element) => {
          return element !== aiChoice;
      }));
      const board = document.querySelector(".board");
      board.children[aiChoice].textContent = "O"
      setTurnNum((num) => num + 1);
    }
    setPlayerWent(false);
  }, [playerWent]);

  const addPiece = () => {
    if (turnNum > 9 || piece !== "") {
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
