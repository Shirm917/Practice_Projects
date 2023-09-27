import { useState, useEffect } from "react";

const Card = ({
  color,
  handleClick,
  turnDone,
  setTurnDone,
  isCorrectMatch,
  setIsCorrectMatch,
  matchedColor,
  startNewGame,
  setStartNewGame,
}) => {
  const [backFaceVisibility, setBackFaceVisibility] = useState("visible");
  const [fullCardVisibility, setFullCardVisibility] = useState("visible");

  const handleTurn = () => {
    if (turnDone) return;
    setBackFaceVisibility("hidden");
    handleClick(color);
  };

  useEffect(() => {
    if (turnDone) {
      if (!isCorrectMatch && matchedColor !== color) {
        setTimeout(() => {
          setBackFaceVisibility("visible");
        }, 1000);
      } else if (isCorrectMatch && matchedColor === color) {
        setTimeout(() => {
          setFullCardVisibility("hidden");
        }, 1000);
      }
      setTimeout(() => {
        setTurnDone(false);
      }, 1000);
      setIsCorrectMatch(false);
    }
  }, [turnDone]);

  useEffect(() => {
    if (startNewGame) {
      setBackFaceVisibility("visible");
      setFullCardVisibility("visible");
      setStartNewGame(false);
    }
  }, [startNewGame]);

  return (
    <section
      className="card"
      onClick={handleTurn}
      style={{ visibility: fullCardVisibility }}
    >
      <div
        className="card-back"
        style={{ visibility: backFaceVisibility, color: "white" }}
      ></div>
      <div className="card-front" style={{ background: color }}></div>
    </section>
  );
};

export default Card;
