import { useState, useEffect } from "react";
import ColorBox from "./Components/ColorBox";
import ColorOptions from "./Components/ColorOptions";
import "./App.css";

function App() {
  const [boxColor, setBoxColor] = useState(null);

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
      </section>
    )
  );
}

export default App;
