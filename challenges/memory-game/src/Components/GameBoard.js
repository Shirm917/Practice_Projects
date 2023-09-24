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
  
  return (
    <section className="game-board">
      {colors.map((color, i) => {
        return <Card key={i} color={color} />;
      })}
    </section>
  );
};

export default GameBoard;
