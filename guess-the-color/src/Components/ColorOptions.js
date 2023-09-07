import { useState, useEffect } from "react";
import ColorButton from "./ColorButton";
import { click } from "@testing-library/user-event/dist/click";
const ColorOptions = ({ boxColor, setMessage }) => {
  const [randomArr, setRandomArr] = useState([]);
  const [clickedColor, setClickedColor] = useState(null);

  useEffect(() => {
    let hexesArr = [generateRandomColor(), generateRandomColor(), boxColor];
    console.log(hexesArr[2]);
    let randomizedArr = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * hexesArr.length);
      randomizedArr.push(hexesArr[randomIndex]);
      hexesArr.splice(randomIndex, 1);
    }
    setRandomArr(randomizedArr);
  }, []);

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  useEffect(() => {
    if (clickedColor === boxColor) {
      setMessage("You win!");
    } else if (clickedColor) {
      setMessage("Wrong!");
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
