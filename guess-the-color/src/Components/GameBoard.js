import { useState, useEffect } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";

const GameBoard = () => {
  const [boxColor, setBoxColor] = useState(null);
  const [message, setMessage] = useState("Choose the correct color!");

  useEffect(() => {
    let letters = "0123456789ABCDEF";
    let newBoxColor = "#";
    for (let i = 0; i < 6; i++) {
      newBoxColor += letters[Math.floor(Math.random() * 16)];
    }
    setBoxColor(newBoxColor);
  }, []);

  return (
    boxColor && (
      <section className="game-container">
        <ColorBox boxColor={boxColor} />
        <ColorOptions boxColor={boxColor} />
        <p>{message}</p>
      </section>
    )
  );
};

export default GameBoard;
