import { useState, useEffect } from "react";

const Card = ({
  color,
  handleClick,
  turnDone,
  setTurnDone,
  isCorrectMatch,
  setIsCorrectMatch,
}) => {
  const [backFaceVisibility, setBackFaceVisibility] = useState("visible");

  const handleTurn = () => {
    if (turnDone) return;
    setBackFaceVisibility("hidden");
    handleClick(color);
  };

  useEffect(() => {
    if (turnDone && !isCorrectMatch) {
      setTimeout(() => {
        setBackFaceVisibility("visible");
        setTurnDone(false);
      }, 1000);
    }
    setIsCorrectMatch(false);
  }, [turnDone]);

  return (
    <section
      className="card"
      onClick={handleTurn}
    >
      <div className="card-back" style={{visibility: backFaceVisibility}}></div>
      <div className="card-front" style={{ background: color }}></div>
    </section>
  );
};

export default Card;
