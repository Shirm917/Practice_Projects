import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const ProductQuantity = (props) => {
    const {quantity, setQuantity} = props;

    return (
        <section className="productQuantity">
            <Button className="quanityBtn" onClick={() => setQuantity(quantity - 1)}>-</Button>
            <TextField variant="outlined" value={quantity} inputProps={{min: 0, max: 10, style: {textAlign: "center"}}} />
            <Button className="quanityBtn" onClick={() => setQuantity(quantity + 1) }>+</Button>
        </section>
     );
}

export default ProductQuantity;