import {useState,useContext} from "react";
import CloseIcon from '@mui/icons-material/Close';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { AppContext } from "../App";

const BoardSection = () => {
    const {turnNum,setTurnNum} = useContext(AppContext);
    const [piece,setPiece] = useState(null);

    const addPiece = () => {
        if (turnNum > 9 || piece !== null) {
            return;
        } else if (turnNum % 2 === 0) {
            setPiece(<CloseIcon sx={{ fontSize: 80 }}/>)
        } else if (turnNum % 2 === 1) {
            setPiece(<PanoramaFishEyeIcon sx={{ fontSize: 80 }}/>)
        }
        setTurnNum(num => num + 1);
    };

  return (
    <div onClick={addPiece}>{piece}</div>
  );
};

export default BoardSection;
