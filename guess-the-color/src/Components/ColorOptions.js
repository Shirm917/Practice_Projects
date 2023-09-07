import { useState, useEffect } from "react";
import ColorButton from "./ColorButton";

const ColorOptions = ({
  boxColor,
  clicks,
  setClicks,
  setMessage,
  randomArr,
}) => {
  const [clickedColor, setClickedColor] = useState(null);

  const getResult = () => {
    if (clickedColor === boxColor) {
      setMessage("CORRECT!");
      setClicks(clicks + 1);
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
            getResult={getResult}
          />
        );
      })}
    </section>
  );
};

export default ColorOptions;
