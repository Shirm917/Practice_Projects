import Button from "./Button";
const UndoButton = ({ circles, setCircles }) => {
  const handleUndo = () => {
    const newCircles = [...circles];
    newCircles.pop();
    setCircles(newCircles);
  };
  return <Button title="Undo" onClick={handleUndo} />;
};

export default UndoButton;
