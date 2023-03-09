import { useEffect, useContext } from "react";
import { AppContext } from "../App";
import ChoicePic from "./ChoicePic";

const ComputerChoice = () => {
  const { computerChoice, setComputerChoice, playerChoice } =
    useContext(AppContext);

  useEffect(() => {
    if (playerChoice) {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomNum = Math.floor(Math.random() * 3);
      setComputerChoice(choices[randomNum]);
    }
  }, [playerChoice]);

  return (
    <section className="computerChoices">
      <ChoicePic choice={computerChoice} />
      <p>Computer Choice: {computerChoice}</p>
    </section>
  );
};

export default ComputerChoice;
