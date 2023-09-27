const NewGameBtn = ({shuffleColors,setStartNewGame}) => {

    const handleClick = () => {
        shuffleColors();
        setStartNewGame(true);
    }
    return (
        <button className="new-game-btn" onClick={handleClick}>New Game</button>
     );
}

export default NewGameBtn;