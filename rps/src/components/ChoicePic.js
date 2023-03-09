import CircleIcon from "@mui/icons-material/Circle";
import NoteIcon from "@mui/icons-material/Note";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const ChoicePic = (props) => {
  const { choice } = props;

  return choice === "" ? (
    null
  ) : choice === "Rock" ? (
    <CircleIcon />
  ) : choice === "Paper" ? (
    <NoteIcon />
  ) : (
    <ContentCutIcon />
  );
};

export default ChoicePic;
