import { useState, useEffect } from "react";
import ColorButton from "./ColorButton";

const ColorOptions = ({ boxColor, clicks, setClicks, setMessage,randomArr }) => {
  const [clickedColor, setClickedColor] = useState(null);

  useEffect(() => {
    if (clicks < 1) return;
    if (clickedColor === boxColor) {
      setMessage("CORRECT, Go Again!");
    } else {
      setMessage("WRONG, Go Again!");
    }
  }, [clicks]);

  return (
    <section>
      {randomArr.map((color) => {
        return (
          <ColorButton
            key={color}
            colorHex={color}
            setClickedColor={setClickedColor}
            clicks={clicks}
            setClicks={setClicks}
          />
        );
      })}
    </section>
  );
};

export default ColorOptions;
