const Circle = ({x,y,color,size}) => {
    const offset = size / 3;
    return (
        <div className="circle" style={{top: y - offset + "px", left: x - offset + "px", background: color, width: size + "px", height: size + "px"}}></div>
     );
}

export default Circle;