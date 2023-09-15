const Circle = ({x,y,color,size}) => {

    return (
        <div className="circle" style={{top: y - 5 + "px", left: x - 5 + "px", background: color, width: size + "px", height: size + "px"}}></div>
     );
}

export default Circle;