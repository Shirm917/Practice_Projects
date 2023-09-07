import { useState, useEffect } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";

const GameBoard = () => {
  const [boxColor, setBoxColor] = useState(null);
  const [randomArr, setRandomArr] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState("Choose the correct color!");

  useEffect(() => {
    const newBoxColor = generateRandomColor();
    setBoxColor(newBoxColor);
  }, [clicks]);

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  useEffect(() => {
    if (boxColor) {
      randomizeArray();
    }
  }, [boxColor]);

  const randomizeArray = () => {
    let hexesArr = [generateRandomColor(), generateRandomColor(), boxColor];
    let randomizedArr = [];
    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * hexesArr.length);
      randomizedArr.push(hexesArr[randomIndex]);
      hexesArr.splice(randomIndex, 1);
    }
    setRandomArr(randomizedArr);
  };

  return (
    randomArr && (
      <section className="game-container">
        <ColorBox boxColor={boxColor} />
        <ColorOptions
          boxColor={boxColor}
          clicks={clicks}
          setClicks={setClicks}
          setMessage={setMessage}
          randomArr={randomArr}
        />
        <p>{message}</p>
      </section>
    )
  );
};

export default GameBoard;
