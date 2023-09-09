import { useState, useEffect } from "react";
import ColorButton from "./ColorButton";

const ColorOptions = ({
  boxColor,
  setMessage,
  randomArr,
  setScore,
}) => {
  const [clickedColor, setClickedColor] = useState(null);

  const getResult = () => {
    if (clickedColor === boxColor) {
      setMessage("CORRECT!");
      setScore((score) => score + 1);
    } else {
      setMessage("WRONG, Try Again!");
    }
  };

  useEffect(() => {
    if (clickedColor) {
      getResult();
    }
  }, [clickedColor]);

  return (
    <section>
      {randomArr.map((color) => {
        return (
          <ColorButton
            key={color}
            colorHex={color}
            setClickedColor={setClickedColor}
          />
        );
      })}
    </section>
  );
};

export default ColorOptions;
