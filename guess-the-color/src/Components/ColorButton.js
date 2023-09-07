const ColorButton = ({ colorHex, setClickedColor }) => {
  return (
    <button className="color-button" onClick={() => setClickedColor(colorHex)}>
      {colorHex}
    </button>
  );
};

export default ColorButton;
