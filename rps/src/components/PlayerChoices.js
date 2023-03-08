import { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";

const PlayerChoices = () => {
  const {playerChoice} = useContext(AppContext);
  return (
    <section>
      <div>
        <Button name="Rock" />
        <Button name="Paper" />
        <Button name="Scissors" />
      </div>
      <div><p>Player Choice: {playerChoice}</p></div>
    </section>
  );
};

export default PlayerChoices;
