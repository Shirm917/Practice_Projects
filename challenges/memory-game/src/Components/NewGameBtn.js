const NewGameBtn = ({setStartNewGame}) => {

    const handleClick = () => {
        setStartNewGame(true);
    }
    return (
        <button className="new-game-btn" onClick={handleClick}>New Game</button>
     );
}

export default NewGameBtn;