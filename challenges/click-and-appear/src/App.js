import { useState } from "react";
import Circle from "./Components/Circle";
import UndoButton from "./Components/UndoButton";
import RedoButton from "./Components/RedoButton";
import ColorPicker from "./Components/ColorPicker";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);
  const [undoCircles, setUndoCircles] = useState([]);

  const handleOnClick = (event) => {
    setCircles([...circles, { x: event.clientX, y: event.clientY }]);
  };
  return (
    <main>
      <section className="input-container">
        <ColorPicker />
        <UndoButton circles={circles} setCircles={setCircles} undoCircles={undoCircles} setUndoCircles={setUndoCircles} />
        <RedoButton circles={circles} setCircles={setCircles} undoCircles={undoCircles} setUndoCircles={setUndoCircles} />
      </section>
      <section className="circle-container" onClick={handleOnClick}>
        {circles.map((circle, index) => {
          return <Circle key={index} x={circle.x} y={circle.y} />;
        })}
      </section>
    </main>
  );
}

export default App;
