import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const ProductQuantity = () => {
    return (
        <section className="productQuantity">
            <Button className="quanityBtn">-</Button>
            <TextField variant="outlined" inputProps={{min: 0, max: 10, style: {textAlign: "center"}}} />
            <Button className="quanityBtn">+</Button>
        </section>
     );
}

export default ProductQuantity;