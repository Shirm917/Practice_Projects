const SizePicker = ({size,setSize}) => {
    return (
        <input type="range" min="30" max="200" value={size} onChange={(event) => setSize(event.target.value)}/>
     );
}

export default SizePicker;