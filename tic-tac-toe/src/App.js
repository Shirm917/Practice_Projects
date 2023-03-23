import { createContext, useState } from "react";
import Board from "./components/Board";
import Turn from "./components/Turn";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [turnNum, setTurnNum] = useState(1);

  return (
    <AppContext.Provider
      value={{
        turnNum,
        setTurnNum,
      }}
    >
      <section className="container">
        <h1>TIC TAC TOE</h1>
        <Turn/>
        <Board/>
      </section>
    </AppContext.Provider>
  );
}

export default App;
