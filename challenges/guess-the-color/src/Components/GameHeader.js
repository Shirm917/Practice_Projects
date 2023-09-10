const GameHeader = ({restart,score}) => {
  return (
    <section className="game-header">
      <button onClick={restart}>Restart</button>
      <p>Score: {score}</p>
    </section>
  );
};

export default GameHeader;
