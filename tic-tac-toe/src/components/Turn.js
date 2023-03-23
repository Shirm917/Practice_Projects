import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const Turn = () => {
  const { turnNum, gameType } = useContext(AppContext);
  const [turn, setTurn] = useState("");

  useEffect(() => {
    if (turnNum > 9) {
      setTurn("Game Over");
    } else if (turnNum % 2 === 0) {
      setTurn("O's turn");
    } else if (turnNum % 2 === 1) {
      setTurn("X's turn");
    }
  }, [turnNum]);

  return <p>{gameType ? turn : "Please select a mode!"}</p>;
};

export default Turn;
