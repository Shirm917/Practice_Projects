import { useState } from 'react';

const ColorBox = () => {
    const [color, setColor] = useState("#C90F57");
    return (
        <div className="colorBox" style={{backgroundColor: color}}></div>
     );
}

export default ColorBox;