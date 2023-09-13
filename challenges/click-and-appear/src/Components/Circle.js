const Circle = ({x,y,color}) => {

    return (
        <div className="circle" style={{top: y + "px", left: x + "px", background: color}}></div>
     );
}

export default Circle;