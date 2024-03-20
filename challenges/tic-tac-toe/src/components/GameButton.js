import Button from '@mui/material/Button';

const GameButton = (props) => {
    const {text, handleClick,clicked} = props;

    return (
        <Button color={clicked === text ? "error" : "primary"}  variant="text" onClick={handleClick}>{text}</Button>
      );
}

export default GameButton;