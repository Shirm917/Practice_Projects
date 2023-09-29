import { useState, useEffect } from "react";
import NewGameBtn from "./NewGameBtn";
import Points from "./Points";
import Card from "./Card";

const GameBoard = () => {
  const [colors, setColors] = useState([
    "#00ff00",
    "#0080ff",
    "#ff00ff",
    "#ff7f00",
    "#ff0000",
    "#ffe474",
    "#00ff80",
    "#c0dcc0",
    "#ff4500",
    "#ff0080",
    "#00ff00",
    "#0080ff",
    "#ff00ff",
    "#ff7f00",
    "#ff0000",
    "#ffe474",
    "#00ff80",
    "#c0dcc0",
    "#ff4500",
    "#ff0080",
  ]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [turnDone, setTurnDone] = useState(false);
  const [isCorrectMatch, setIsCorrectMatch] = useState(false);
  const [matchedColor, setMatchedColor] = useState(null);
  const [startNewGame, setStartNewGame] = useState(false);
  const [matches, setMatches] = useState(0);

  const shuffleColors = () => {
    let shuffledColors = [...colors];
    let currentIndex = shuffledColors.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledColors[currentIndex], shuffledColors[randomIndex]] = [
        shuffledColors[randomIndex],
        shuffledColors[currentIndex],
      ];
    }
    setColors(shuffledColors);
  };

  useEffect(() => {
    shuffleColors();
  }, []);

  const handleClick = (color) => {
    if (!firstCard) {
      setFirstCard(color);
    } else if (firstCard && !secondCard) {
      setSecondCard(color);
    }
  };

  useEffect(() => {
    if (secondCard) {
      if (firstCard === secondCard) {
        setIsCorrectMatch(true);
        setMatchedColor(firstCard);
        setMatches(matches + 1);
      }
      setTurnDone(true);
    }
  }, [secondCard]);

  useEffect(() => {
    if (startNewGame) {
      resetValues();
      setMatches(0);
    }
  }, [startNewGame]);

  const resetValues = () => {
    setMatchedColor(null);
    setFirstCard(null);
    setSecondCard(null);
    setIsCorrectMatch(false);
  };

  useEffect(() => {
    if (matches === 10) {
      alert("You won!");
      shuffleColors();
      setStartNewGame(true);
    }
  }, [matches]);

  return (
    <section className="game-board">
      <div className="game-pieces">
        <NewGameBtn
          shuffleColors={shuffleColors}
          setStartNewGame={setStartNewGame}
        />
        <Points matches={matches} />
      </div>
      {colors.map((color, i) => {
        return (
          <Card
            key={`${color}-${i}`}
            color={color}
            handleClick={handleClick}
            turnDone={turnDone}
            setTurnDone={setTurnDone}
            isCorrectMatch={isCorrectMatch}
            matchedColor={matchedColor}
            startNewGame={startNewGame}
            setStartNewGame={setStartNewGame}
            firstCard={firstCard}
            secondCard={secondCard}
            resetValues={resetValues}
          />
        );
      })}
    </section>
  );
};

export default GameBoard;
