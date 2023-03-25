import { createContext, useState } from "react";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Turn from "./components/Turn";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [turnNum, setTurnNum] = useState(1);
  const [resetBoard, setResetBoard] = useState(false);
  const [gameType, setGameType] = useState("");
  const [winnerMsg, setWinnerMsg] = useState("");

  return (
    <AppContext.Provider
      value={{
        turnNum,
        setTurnNum,
        resetBoard,
        setResetBoard,
        gameType,
        setGameType,
        winnerMsg,
        setWinnerMsg
      }}
    >
      <section className="container">
        <h1>TIC TAC TOE</h1>
        <Buttons/>
        <p>{winnerMsg}</p>
        <Turn/>
        <Board/>
      </section>
    </AppContext.Provider>
  );
}

export default App;
