import {useState,useEffect,useContext} from "react";
import { AppContext } from "../App";

const Turn = () => {
    const {turnNum} = useContext(AppContext);
    const [turn,setTurn] = useState("");

    useEffect(() => {
        if (turnNum > 9) {
            setTurn("Game Over")
        } else if (turnNum % 2 === 0) {
            setTurn("X's turn")
        } else if (turnNum % 2 === 1) {
            setTurn("O's turn")
        }
    }, [turnNum]);

    return (
        <p>{turn}</p>
     );
}

export default Turn;