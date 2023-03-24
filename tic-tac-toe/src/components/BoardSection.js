import { useState, useEffect, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { AppContext } from "../App";

const BoardSection = (props) => {
  const { turnNum, setTurnNum, resetBoard, setResetBoard, gameType } =
    useContext(AppContext);
  const { num } = props;
  const [piece, setPiece] = useState(null);
  const [numArray, setNumArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [playerWent, setPlayerWent] = useState(false);

  //  You get the parent and randomly get one of it's children
  // but only one from the array,
  // so it needs to be zero indexed or we can do plus 1.
  const versusAi = () => {
    if (turnNum > 9 || piece !== null) {
      return;
    } else if (turnNum % 2 === 1) {
      setPiece(<CloseIcon sx={{ fontSize: 80 }} />);
      console.log("num", num);
      //   const filteredNumArray = numArray.filter((element) => {
      //     return element !== num;
      //   })
      //   console.log(filteredNumArray);
      //   setNumArray(filteredNumArray);
      const index = numArray.indexOf(num);
      numArray.splice(index, 1);
      setNumArray([...numArray]);
      setPlayerWent(true);
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    if (playerWent) {
      console.log("numArray in useEffect", numArray);
      const randomNum = Math.floor(Math.random() * numArray.length);
      const aiChoice = numArray[randomNum];
      console.log("aiChoice", aiChoice);
      const index = numArray.indexOf(aiChoice);
      numArray.splice(index, 1);
      setNumArray([...numArray]);
      // const filteredNumArray = numArray.filter((element) => {
      //     return element !== aiChoice;
      // });
      // setNumArray(filteredNumArray);
      const board = document.querySelector(".board");
      board.children[aiChoice].textContent = "o"
      setTurnNum((num) => num + 1);
    }
    setPlayerWent(false);
  }, [playerWent]);

  useEffect(() => {
    console.log("numArray", numArray);
  }, [numArray]);

  const addPiece = () => {
    if (turnNum > 9 || piece !== null) {
      return;
    } else if (turnNum % 2 === 0) {
      setPiece(<PanoramaFishEyeIcon sx={{ fontSize: 80 }} />);
    } else if (turnNum % 2 === 1) {
      setPiece(<CloseIcon sx={{ fontSize: 80 }} />);
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    if (resetBoard) {
      setPiece(null);
    }
    setResetBoard(false);
    setNumArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  }, [resetBoard]);

  return (
    <div
      className="boardSection"
      onClick={gameType === "" ? null : gameType === "Ai" ? versusAi : addPiece}
    >
      {piece}
    </div>
  );
};

export default BoardSection;
