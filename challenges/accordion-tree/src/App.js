import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [subFolders, setSubFolders] = useState(["Sub Folder 1", "Sub Folder 2"]);
  return (
    <div className="folders">
      <p onClick={() => setIsOpen(!isOpen)}>{isOpen ? "↓" : "→"} Main Folder</p>
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
