import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

const Winning = () => {
  const { playerChoice, computerChoice, setPlayerChoice, setComputerChoice } =
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
  }, [computerChoice]);

  const resetChoices = () => {
    setPlayerChoice("");
    setComputerChoice("");
  };

  return (
    <>
      <p>{message}</p>
      {/* Just for now */}
      <button onClick={resetChoices}>Reset</button>
    </>
  );
};

export default Winning;
