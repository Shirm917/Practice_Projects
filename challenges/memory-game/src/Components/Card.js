import { useState, useEffect } from "react";

const Card = ({ color, handleClick, turnDone,setTurnDone }) => {
  const [visibility, setVisibility] = useState("visible");

  const handleTurn = () => {
    if (turnDone) return;
    setVisibility("hidden");
    handleClick(color);
  };

  useEffect(() => {
    if (turnDone) {
        setTimeout(() => {
            setVisibility("visible");
            setTurnDone(false);
        }, 1000);
    }
  }, [turnDone]);

  return (
    <section className="card" onClick={handleTurn}>
      <div className="card-back" style={{ visibility: visibility }}>
      </div>
      <div className="card-front" style={{ background: color }}></div>
    </section>
  );
};

export default Card;
