import { useEffect,useContext } from "react";
import { AppContext } from "../App";

const ComputerChoice = () => {
    const {computerChoice, setComputerChoice, playerChoice} = useContext(AppContext);

    useEffect(() => {
        if (playerChoice) {
            const choices = ["Rock", "Paper", "Scissors"];
            const randomNum = Math.floor(Math.random() * 3);
            setComputerChoice(choices[randomNum]);
        }
    },[playerChoice]);

    return (
        <p>Computer Choice: {computerChoice}</p>
    )
};

export default ComputerChoice;