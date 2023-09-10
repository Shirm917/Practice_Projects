import Button from "./Button";
const UndoButton = ({ circles, setCircles, undoCircles, setUndoCircles }) => {
  const handleUndo = () => {
    const newCircles = [...circles];
    const undoCircle = newCircles.pop();
    setCircles(newCircles);
    setUndoCircles([...undoCircles, undoCircle]);
  };
  return <Button title="Undo" onClick={handleUndo} disabled={circles.length === 0} />;
};

export default UndoButton;
