import { useState, useEffect, createContext } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

export const AppContext = createContext(null);

// reset player and computer choices after message
function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerPicks, setPlayerPicks] = useState(0);
  const [computerPicks, setComputerPicks] = useState(0);

  return (
    <AppContext.Provider
      value={{
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        playerPicks,
        setPlayerPicks,
        computerPicks,
        setComputerPicks
      }}
    >
      <GameBoard />
    </AppContext.Provider>
  );
}

export default App;
