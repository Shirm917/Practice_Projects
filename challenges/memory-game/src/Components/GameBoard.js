import { useState } from "react";
import Card from "./Card";

const GameBoard = () => {
  const [color, setColors] = useState([
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
  return <section className="game-board">
    {
        color.map((color,i) => {
            return <Card key={i} color={color} />
        })
    }
  </section>;
};

export default GameBoard;
