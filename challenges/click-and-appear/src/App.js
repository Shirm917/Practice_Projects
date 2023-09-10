import { useState } from "react";
import Circle from "./Components/Circle";
import UndoButton from "./Components/UndoButton";
import "./App.css";

function App() {
  const [circles, setCircles] = useState([]);
  const handleOnClick = (event) => {
    setCircles([...circles, { x: event.clientX, y: event.clientY }]);
  };
  return (
    <>
      <UndoButton circles={circles} setCircles={setCircles} />
      <div className="container" onClick={handleOnClick}>
        {circles.map((circle, index) => {
          return <Circle key={index} x={circle.x} y={circle.y} />;
        })}
      </div>
    </>
  );
}

export default App;
