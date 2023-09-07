import { useState,useEffect } from "react";
import ColorBox from "./Components/ColorBox";
import './App.css';

function App() {
  const [hexCode, setHexCode] = useState(null);

  useEffect(() => {
    let letters = "0123456789ABCDEF";
    let newHexCode = "#";
    for (let i = 0; i < 6; i++) {
      newHexCode += letters[Math.floor(Math.random() * 16)];
    }
    setHexCode(newHexCode);
  }, []);
  
  return (
    <section className="game-container">
      <ColorBox hexCode={hexCode}/>
    </section>
  );
}

export default App;
