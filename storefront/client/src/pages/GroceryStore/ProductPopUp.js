import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import pancakes from "../../assets/pancakes.jpg";

const ProductPopUp = (props) => {
  const { open, setOpen, product } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="productPopUp"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
    >
      <div className="popUpHeader">
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon color="action" />
          </Button>
        </DialogActions>
        <DialogTitle
          className="popUpTitle"
          sx={{ fontSize: 40, marginBottom: 7 }}
        >
          {product.name}
        </DialogTitle>
      </div>
      <DialogContent className="popUpContent">
        <img src={pancakes} />
        <div>
          <DialogContentText sx={{ color: "#000", fontSize: 20 }}>
            ${product.price}
          </DialogContentText>
          <DialogContentText sx={{ color: "#000", fontSize: 20 }}>
            {product.amount_per_price}
          </DialogContentText>
          <DialogContentText sx={{ color: "#000", fontSize: 20 }}>
            {product.nutritional_info}
          </DialogContentText>
        </div>
      </DialogContent>
      <DialogActions>
        <Button>Add to cart</Button>
      </DialogActions>
      <DialogContent>
        <DialogContentText
          sx={{ color: "#000", fontSize: 20, textAlign: "center" }}
        >
          About the Product
        </DialogContentText>
        <DialogContentText
          sx={{ color: "#000", fontSize: 20, textAlign: "center" }}
        >
          {product.description}.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPopUp;
