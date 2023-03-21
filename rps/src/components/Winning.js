import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const Winning = () => {
  const { playerChoice, computerChoice, computerPicks} =
    useContext(AppContext);
  const [message, setMessage] = useState("");

  const determineWinner = () => {
    if (playerChoice === computerChoice) {
      setMessage("It's a draw");
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      setMessage("You Won!!");
    } else {
      setMessage("Computer won :(");
    }
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      determineWinner();
    }
  }, [computerPicks]);

  return <p className="winningMsg">{message}</p>;
};

export default Winning;
