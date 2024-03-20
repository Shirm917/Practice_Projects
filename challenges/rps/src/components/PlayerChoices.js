import { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";
import ChoicePic from "./ChoicePic";

const PlayerChoices = () => {
  const {playerChoice} = useContext(AppContext);
  return (
    <section className="playerChoices">
      <div className="buttons">
        <Button name="Rock" />
        <Button name="Paper" />
        <Button name="Scissors" />
      </div>
      <p>Player Choice: {playerChoice}</p>
      <ChoicePic choice={playerChoice}/>
    </section>
  );
};

export default PlayerChoices;
