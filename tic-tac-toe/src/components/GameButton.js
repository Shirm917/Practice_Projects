import Button from '@mui/material/Button';

const GameButton = (props) => {
    const {text, handleClick} = props;
    return (
        <Button variant="text" onClick={handleClick}>{text}</Button>
      );
}

export default GameButton;