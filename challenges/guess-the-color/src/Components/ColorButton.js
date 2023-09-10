const ColorButton = ({ colorHex, setClickedColor }) => {
  const handleClick = () => {
    setClickedColor(colorHex);
  };
  return (
    <button className="color-button" onClick={handleClick}>
      {colorHex}
    </button>
  );
};

export default ColorButton;
