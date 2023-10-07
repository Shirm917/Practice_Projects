import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p onClick={() => setIsOpen(!isOpen)}>Main Folder</p>
      {isOpen && (
        <div>
          <p>Sub Folder</p>
        </div>
      )}
    </div>
  );
}

export default App;
