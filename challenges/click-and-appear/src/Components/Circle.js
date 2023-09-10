const Circle = ({x,y}) => {

    return (
        <div className="circle" style={{top: y + "px", left: x + "px"}}></div>
     );
}

export default Circle;