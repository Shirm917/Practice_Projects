import { useState, useEffect, createContext } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

export const AppContext = createContext(null);

// reset player and computer choices after message
function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  useEffect(() => {
    console.log("Player Choice => ", playerChoice);
    console.log("Computer Choice => ", computerChoice);
  }, [computerChoice]);

  return (
    <AppContext.Provider
      value={{
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
      }}
    >
      <GameBoard />
    </AppContext.Provider>
  );
}

export default App;
