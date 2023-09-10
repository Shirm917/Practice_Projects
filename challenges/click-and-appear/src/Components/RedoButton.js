import Button from "./Button";
const RedoButton = ({ circles, setCircles, undoCircles, setUndoCircles }) => {
  const handleRedo = () => {
    const newUndoCircles = [...undoCircles];
    const newCircles = [...circles];
    const lastUndoCircle = newUndoCircles.pop();
    setUndoCircles(newUndoCircles);
    setCircles([...newCircles, lastUndoCircle]);
  };

  return <Button title="Redo" onClick={handleRedo} />;
};

export default RedoButton;
