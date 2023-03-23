import { createContext, useState } from "react";
import Board from "./components/Board";
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
        <Board />
      </section>
    </AppContext.Provider>
  );
}

export default App;
