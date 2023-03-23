import { createContext, useState } from "react";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Turn from "./components/Turn";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [turnNum, setTurnNum] = useState(1);
  const [resetBoard, setResetBoard] = useState(false);

  return (
    <AppContext.Provider
      value={{
        turnNum,
        setTurnNum,
        resetBoard,
        setResetBoard
      }}
    >
      <section className="container">
        <h1>TIC TAC TOE</h1>
        <Buttons/>
        <Turn/>
        <Board/>
      </section>
    </AppContext.Provider>
  );
}

export default App;
