import PlayerChoices from "./PlayerChoices";
import ComputerChoice from "./ComputerChoice";
import Winning from "./Winning";

const GameBoard = () => {
  return (
    <section className="board">
      <PlayerChoices />
      <Winning />
      <ComputerChoice />
    </section>
  );
};

export default GameBoard;
