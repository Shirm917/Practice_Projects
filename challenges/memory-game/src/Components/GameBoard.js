import { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = () => {
  const [colors, setColors] = useState([
    "#00ff00",
    "#0080ff",
    "#ff00ff",
    "#ff7f00",
    "#ff0000",
    "#ffe474",
    "#00ff80",
    "#c0dcc0",
    "#ff4500",
    "#ff0080",
    "#00ff00",
    "#0080ff",
    "#ff00ff",
    "#ff7f00",
    "#ff0000",
    "#ffe474",
    "#00ff80",
    "#c0dcc0",
    "#ff4500",
    "#ff0080",
  ]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const shuffleColors = () => {
    let shuffledColors = [...colors];
    let currentIndex = shuffledColors.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledColors[currentIndex], shuffledColors[randomIndex]] = [
        shuffledColors[randomIndex],
        shuffledColors[currentIndex],
      ];
    }
    setColors(shuffledColors);
  };

  useEffect(() => {
    shuffleColors();
  }, []);

  const handleClick = (color) => {
    if (!firstCard) {
      setFirstCard(color);
    } else if (firstCard && !secondCard) {
      setSecondCard(color);
    }
  };

  useEffect(() => {
    if (secondCard) {
      if (firstCard === secondCard) {
        setColors(prevColors => prevColors.filter(color => color !== firstCard))
      }
      setFirstCard(null);
      setSecondCard(null);
    }
  }, [secondCard]);

  return (
    <section className="game-board">
      {colors.map((color, i) => {
        return <Card key={i} color={color} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default GameBoard;
