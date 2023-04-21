import { useState, useContext } from "react";
import { AppContext } from "../../App";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pancakes from "../../assets/pancakes.jpg";
import ProductPopUp from "./ProductPopUp";
import { Divider } from "@mui/material";
import ProductQuantity from "./ProductQuantity";

const ProductCard = (props) => {
  const { product } = props;
  const { cart, setCart } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    const cartProduct = {
      product_id: product.product_id,
      name: product.name,
      quantity,
      image_path: product.image_path,
      price: product.price,
    };
    const updatedCart = [...cart, cartProduct];
    setCart(updatedCart);
  };

  return (
    <>
      <ProductPopUp open={open} setOpen={setOpen} product={product} />
      <Card className="productCard">
        <div className="product" onClick={() => setOpen(true)}>
          <CardContent className="cardContent">
            <div>
              <Typography className="name">{product.name}</Typography>
              <Typography className="amount">
                {product.amount_per_price}
              </Typography>
            </div>
            <Typography className="price">${product.price}</Typography>
          </CardContent>
          <CardMedia className="cardMedia" image={pancakes} />
        </div>
        <Divider />
        <CardActions>
          <Button className="addBtn" variant="contained" onClick={addToCart}>
            Add
          </Button>
          <ProductQuantity
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </CardActions>
        {/* Place to add and subtract units, make this flex */}
      </Card>
    </>
  );
};

export default ProductCard;
