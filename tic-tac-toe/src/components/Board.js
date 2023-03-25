import { useState, useEffect,useContext } from "react";
import { AppContext } from "../App";
import BoardSection from "./BoardSection";

const Board = () => {
    const {turnNum,setWinnerMsg} = useContext(AppContext);

    let patterns = [
        //horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        //vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    useEffect(() => {
        if (turnNum >= 5 && turnNum <= 9) {
            const board = document.querySelector(".board");
            for (let i = 0; i < patterns.length; i++) {
                const piecesArr = [];
                for (let j = 0; j < patterns[i].length; j++) {
                    piecesArr.push(board.children[patterns[i][j]].textContent);
                }
                console.log(piecesArr);
                const winnerCheck = piecesArr.every((element,i,arr) => {
                    return element === arr[0] && element !== "";
                });
                if (winnerCheck) {
                    setWinnerMsg(`${piecesArr[0]} Won!`);
                };
            }
        }
    }, [turnNum]);

    return (
        <section className="board">
            <BoardSection num={0}/>
            <BoardSection num={1}/>
            <BoardSection num={2}/>
            <BoardSection num={3}/>
            <BoardSection num={4}/>
            <BoardSection num={5}/>
            <BoardSection num={6}/>
            <BoardSection num={7}/>
            <BoardSection num={8}/>
        </section>
     );
}

export default Board;