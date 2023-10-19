const NumberBtn = ({ number, chosenNumber, setChosenNumber }) => {

  const handleNumberClick = (event) => {
    const number = parseInt(event.target.value);
    setChosenNumber(number);
  };
  
  return (
    <button
      style={{ backgroundColor: number === chosenNumber ? "black" : "gray" }}
      className="number-btn"
      value={number}
      onClick={handleNumberClick}
    >
      {number === 0 ? "Delete" : number}
    </button>
  );
};

export default NumberBtn;
