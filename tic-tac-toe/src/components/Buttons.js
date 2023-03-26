import {useState,useContext} from "react";
import Stack from '@mui/material/Stack';
import GameButton from './GameButton';
import { AppContext } from "../App";

const Buttons = () => {
    const {setResetBoard,setGameType} = useContext(AppContext);
    const [clicked, setClicked] = useState("");

    const versusAi = () => {
        setGameType("Ai");
        setClicked("Versus Ai");
    };

    const twoPlayer = () => {
        setGameType("Two Player");
        setClicked("2 Players");
    };

    const resetBoard = () => {
        setResetBoard(true);
        setClicked("Reset");
    };

    return (
        <Stack spacing={2} direction="row">
            <GameButton clicked={clicked} text="Versus Ai" handleClick={versusAi}/>
            <GameButton clicked={clicked} text="2 Players" handleClick={twoPlayer}/>
            <GameButton text="Reset Board" handleClick={resetBoard}/>
        </Stack>
     );
}

export default Buttons;