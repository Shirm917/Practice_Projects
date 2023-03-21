import { useContext } from "react";
import { AppContext } from "../App";

const Button = (props) => {
  const { name } = props;
  const { setPlayerChoice, setPlayerPicks } = useContext(AppContext);

  const handleClick = (event) =>{
    setPlayerChoice(event.target.value);
    setPlayerPicks((pick) => pick + 1);
  };

  return (
    <button onClick={handleClick} value={name}>
      {name}
    </button>
  );
};

export default Button;
