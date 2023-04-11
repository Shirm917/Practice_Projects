import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function Modal(props) {
  const { title } = props;
  const { errorMsg, modalTitle,count } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (errorMsg && modalTitle === title) {
      setOpen(true);
    }
  }, [errorMsg,count]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>{errorMsg}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
