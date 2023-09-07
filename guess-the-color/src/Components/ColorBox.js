import { useState } from 'react';

const ColorBox = ({hexCode}) => {
    return (
        <div className="color-box" style={{backgroundColor: hexCode}}></div>
     );
}

export default ColorBox;