import { useState, useEffect, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { AppContext } from "../App";

const BoardSection = (props) => {
  const { turnNum, setTurnNum, resetBoard, setResetBoard, gameType } =
    useContext(AppContext);
  const { num } = props;
  const [piece, setPiece] = useState(null);
  const [numArray, setNumArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [playerWent, setPlayerWent] = useState(false);

  const versusAi = () => {
    if (turnNum > 9 || piece !== null) {
      return;
    } else if (turnNum % 2 === 0) {
      setPiece(<PanoramaFishEyeIcon sx={{ fontSize: 80 }} />);
    } else if (turnNum % 2 === 1) {
      setPiece(<CloseIcon sx={{ fontSize: 80 }} />);
      setPlayerWent(true);
      const index = numArray.indexOf(num);
      numArray.splice(index, 1);
      setNumArray([...numArray]);
    }
    setTurnNum((num) => num + 1);
  };

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * numArray.length);
    const aiChoice = numArray[randomNum];
    const index = numArray.indexOf(aiChoice);
    numArray.splice(index, 1);
    setNumArray([...numArray]);
  }, [playerWent]);

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
