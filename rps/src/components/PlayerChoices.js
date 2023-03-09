import { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";
import ChoicePic from "./ChoicePic";

const PlayerChoices = () => {
  const {playerChoice} = useContext(AppContext);
  return (
    <section className="playerChoices">
      <ChoicePic choice={playerChoice}/>
      <p>Player Choice: {playerChoice}</p>
      <div>
        <Button name="Rock" />
        <Button name="Paper" />
        <Button name="Scissors" />
      </div>
    </section>
  );
};

export default PlayerChoices;
