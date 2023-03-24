import BoardSection from "./BoardSection";

const Board = () => {
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