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

  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };
  useEffect(() => {
    shuffle(colors);
  }, []);

  const handleClick = (color) => {
    if (!firstCard) {
        setFirstCard(color);
    } else if (firstCard && !secondCard) {
        setSecondCard(color);
    }
  };

  return (
    <section className="game-board">
      {colors.map((color, i) => {
        return <Card key={i} color={color} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default GameBoard;
