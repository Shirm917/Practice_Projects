const NumberBtn = ({ number, chosenNumber, setChosenNumber }) => {
  return (
    <button
      style={{ backgroundColor: number == chosenNumber ? "black" : "gray" }}
      className="number-btn"
      value={number}
      onClick={(event) => setChosenNumber(event.target.value)}
    >
      {number}
    </button>
  );
};

export default NumberBtn;
