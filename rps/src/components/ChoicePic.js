import CircleIcon from "@mui/icons-material/Circle";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const ChoicePic = (props) => {
  const { choice } = props;

  return (
    <div className="choicePic">
      {
        choice === "" ? (
          null
        ) : choice === "Rock" ? (
          <CircleIcon sx={{fontSize: 130}} />
        ) : choice === "Paper" ? (
          <NoteIcon sx={{fontSize: 110}} />
        ) : (
          <ContentCutIcon sx={{fontSize: 100}} />
        )
      }
    </div>
  )
};

export default ChoicePic;
