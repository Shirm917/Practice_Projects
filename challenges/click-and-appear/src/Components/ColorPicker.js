const ColorPicker = ({ color, setColor }) => {
  return (
    <input
      className="color-picker"
      type="color"
      value={color}
      onChange={(event) => setColor(event.target.value)}
    />
  );
};

export default ColorPicker;
