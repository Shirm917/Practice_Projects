import Button from "./Button";
const RedoButton = ({ circles, setCircles, undoCircles, setUndoCircles }) => {
  const handleRedo = () => {
    const newUndoCircles = [...undoCircles];
    const lastUndoCircle = newUndoCircles.pop();
    if (!lastUndoCircle) return;
    setUndoCircles(newUndoCircles);
    setCircles([...circles, lastUndoCircle]);
  };

  return <Button title="Redo" onClick={handleRedo} />;
};

export default RedoButton;
