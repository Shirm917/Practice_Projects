const NumberBtn = ({number,setNumber}) => {
    return (
        <button value={number} onClick={(event) => setNumber(event.target.value)}>{number}</button>
     );
}

export default NumberBtn;