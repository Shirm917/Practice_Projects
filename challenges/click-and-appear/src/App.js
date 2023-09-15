import { useState } from "react";
import Circle from "./Components/Circle";
import UndoButton from "./Components/UndoButton";
import RedoButton from "./Components/RedoButton";
import ColorPicker from "./Components/ColorPicker";
import SizePicker from "./Components/SizePicker";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);
  const [undoCircles, setUndoCircles] = useState([]);
  const [color, setColor] = useState("#1100ff");

  const handleOnClick = (event) => {
    setCircles([...circles, { x: event.clientX, y: event.clientY, color }]);
  };
  return (
    <main>
      <section className="input-container">
        <ColorPicker color={color} setColor={setColor} />
        <UndoButton
          circles={circles}
          setCircles={setCircles}
          undoCircles={undoCircles}
          setUndoCircles={setUndoCircles}
        />
        <RedoButton
          circles={circles}
          setCircles={setCircles}
          undoCircles={undoCircles}
          setUndoCircles={setUndoCircles}
        />
        <SizePicker/>
      </section>
      <section className="circle-container" onClick={handleOnClick}>
        {circles.map((circle, index) => {
          return <Circle key={index} x={circle.x} y={circle.y} color={circle.color}/>;
        })}
      </section>
    </main>
  );
}

export default App;
