import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ProductPopUp = (props) => {
    const {open,setOpen, product} = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {product.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {product.nutritional_info}
          </DialogContentText>
        </DialogContent>
      </Dialog>
     );
}

export default ProductPopUp;