import { useState } from 'react';
import Circle from './Components/Circle';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const handleOnClick = (event) => {
    console.log(event.clientX, event.clientY);
    setCircles([...circles, {x: event.clientX, y: event.clientY}]);
  }
  return (
    <div className="container" onMouseDown={handleOnClick}>
      {
        circles.map((circle,index) => {
          return <Circle key={index} x={circle.x} y={circle.y}/>
        })
      }
    </div>
  );
}

export default App;
