import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState(["File 1", "File 2"]);

  const addFile = () => {
    const newFile = prompt("Enter new file name");
    setFiles([...files, newFile]);
  }
  return (
    <div className="folders">
      <p>*Right click on main folder to add files</p>
      <p onClick={() => setIsOpen(!isOpen)} onContextMenu={addFile}>{isOpen ? "↓" : "→"} Main Folder</p>
      {isOpen && (
        <div className="files">
          {files.map((file) => (
            <p>{file}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
