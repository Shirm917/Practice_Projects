import { useContext } from "react";
import { AppContext } from "../App";

const Button = (props) => {
  const { name } = props;
  const { setPlayerChoice } = useContext(AppContext);
  return (
    <button onClick={(event) => setPlayerChoice(event.target.value)} value={name}>
      {name}
    </button>
  );
};

export default Button;
