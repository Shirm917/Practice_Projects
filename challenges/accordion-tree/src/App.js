import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [subFolders, setSubFolders] = useState(["Sub Folder 1", "Sub Folder 2"]);

  const addSubFolder = () => {
    const newSubFolder = prompt("Enter new sub folder name");
    setSubFolders([...subFolders, newSubFolder]);
  }
  return (
    <div className="folders">
      <p>*Right click on main folder to add subfolders</p>
      <p onClick={() => setIsOpen(!isOpen)} onContextMenu={addSubFolder}>{isOpen ? "↓" : "→"} Main Folder</p>
      {isOpen && (
        <div className="sub-folders">
          {subFolders.map((subFolder) => (
            <p>{subFolder}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
