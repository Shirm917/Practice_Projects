const Circle = ({x,y,color,size}) => {

    return (
        <div className="circle" style={{top: y + "px", left: x + "px", background: color, width: size + "px", height: size + "px"}}></div>
     );
}

export default Circle;