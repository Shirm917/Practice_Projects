import { useState, useEffect } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";
import GameHeader from "./GameHeader";
import Message from "./Message";

const GameBoard = () => {
  const [boxColor, setBoxColor] = useState(null);
  const [randomArr, setRandomArr] = useState([]);
  const [message, setMessage] = useState("Choose the correct color!");
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

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
    randomizeArr(newBoxColor);
  }, [score]);

  const randomizeArr = (newBoxColor) => {
    let hexesArr = [generateRandomColor(), generateRandomColor(), newBoxColor];
    setRandomArr(hexesArr.sort(() => Math.random() - 0.5));
  };

  const restart = () => {
    setScore(0);
    setMessage("Choose the correct color!");
  };

  return (
    randomArr && (
      <main className="game-container">
        <h1>Guess The Color</h1>
        <GameHeader restart={restart} score={score} />
        <ColorBox boxColor={boxColor} />
        <ColorOptions
          boxColor={boxColor}
          setMessage={setMessage}
          randomArr={randomArr}
          score={score}
          setScore={setScore}
        />
        <Message message={message}/>
      </main>
    )
  );
};

export default GameBoard;
