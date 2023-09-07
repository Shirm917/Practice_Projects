import { useState, useEffect } from "react";
import ColorButton from "./ColorButton";
const ColorOptions = ({ boxColor }) => {

  const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  return (
    <section className="color-options">
      <ColorButton ColorHex={generateRandomColor()} />
      <ColorButton ColorHex={generateRandomColor()} />
      <ColorButton ColorHex={boxColor} />
    </section>
  );
};

export default ColorOptions;
