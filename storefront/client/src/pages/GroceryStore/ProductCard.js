import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pancakes from "../../assets/pancakes.jpg";
import ProductPopUp from "./ProductPopUp";
import { Divider } from "@mui/material";

const ProductCard = (props) => {
  const { product } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ProductPopUp open={open} setOpen={setOpen} product={product} />
      <Card className="productCard" onClick={() => setOpen(true)}>
        <div className="product">
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
      <Divider/>
      <Button variant="text">Add</Button>
      {/* Place to add and subtract units, make this flex */}
      </Card>
    </>
  );
};

export default ProductCard;
