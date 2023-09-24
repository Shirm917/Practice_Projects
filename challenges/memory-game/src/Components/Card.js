const Card = ({color,handleClick}) => {
    return (
        <div className="card" style={{background: color}} onClick={() => handleClick(color)}></div>
     );
}

export default Card;