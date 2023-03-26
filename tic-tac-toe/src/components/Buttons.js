import {useContext} from "react";
import Stack from '@mui/material/Stack';
import GameButton from './GameButton';
import { AppContext } from "../App";

const Buttons = () => {
    const {setResetBoard,setGameType} = useContext(AppContext);
    const versusAi = () => {
        setGameType("Ai")
    };

    const twoPlayer = () => {
        setGameType("Two Player")
    };

    const resetBoard = () => {
        setResetBoard(true);
    };

    return (
        <Stack spacing={2} direction="row">
            <GameButton text="Versus Ai" handleClick={versusAi}/>
            <GameButton text="2 Players" handleClick={twoPlayer}/>
            <GameButton text="Reset Board" handleClick={resetBoard}/>
        </Stack>
     );
}

export default Buttons;