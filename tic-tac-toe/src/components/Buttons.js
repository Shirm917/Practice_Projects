import {useContext} from "react";
import Stack from '@mui/material/Stack';
import GameButton from './GameButton';
import { AppContext } from "../App";

const Buttons = () => {
    const {setTurnNum,setResetBoard} = useContext(AppContext);
    const versusAI = () => {
        // For Now
        console.log("Versus AI");
    };

    const twoPlayer = () => {
        // For Now
        console.log("Two Player");
    };

    const resetBoard = () => {
        setTurnNum(1);
        // const boardSections = document.querySelectorAll(".boardSection");
        // for (const section of boardSections) {
        //     section.textContent = "";
        // }
        setResetBoard(true);
    };
    
    return (
        <Stack spacing={2} direction="row">
            <GameButton text="Versus AI" handleClick={versusAI}/>
            <GameButton text="2 Players" handleClick={twoPlayer}/>
            <GameButton text="Reset Board" handleClick={resetBoard}/>
        </Stack>
     );
}

export default Buttons;