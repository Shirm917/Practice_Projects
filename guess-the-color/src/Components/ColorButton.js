const ColorButton = ({ colorHex, setClickedColor, clicks, setClicks }) => {
  const handleClick = () => {
    setClickedColor(colorHex);
    setClicks(clicks + 1);
  };
  return (
    <button className="color-button" onClick={handleClick}>
      {colorHex}
    </button>
  );
};

export default ColorButton;
