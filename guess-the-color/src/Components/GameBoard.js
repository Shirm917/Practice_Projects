import { useState, useEffect } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";

const GameBoard = () => {
  const [boxColor, setBoxColor] = useState(null);
  const [randomArr, setRandomArr] = useState([]);
  const [message, setMessage] = useState("Choose the correct color!");
  const [score, setScore] = useState(0);

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  useEffect(() => {
    const newBoxColor = generateRandomColor();
    setBoxColor(newBoxColor);
    randomizeArr(newBoxColor)
  }, [score]);

  const randomizeArr = (newBoxColor) => {
    let hexesArr = [generateRandomColor(), generateRandomColor(), newBoxColor];
    setRandomArr(hexesArr.sort(() => Math.random() - 0.5));
  }

  return (
    randomArr && (
      <section className="game-container">
        <p>Score: {score}</p>
        <ColorBox boxColor={boxColor} />
        <ColorOptions
          boxColor={boxColor}
          setMessage={setMessage}
          randomArr={randomArr}
          score={score}
          setScore={setScore}
        />
        <p>{message}</p>
      </section>
    )
  );
};

export default GameBoard;
