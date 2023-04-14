import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pancakes from "../../assets/pancakes.jpg";
import ProductPopUp from "./ProductPopUp";

const ProductCard = (props) => {
  const { product } = props;

  const [open, setOpen] = useState(false);

  return (
    <section>
      <Card className="productCard" onClick={() => setOpen(true)}>
        <CardContent className="cardContent">
          <Typography className="name" gutterBottom>
            {product.name}
          </Typography>
          <Typography className="amount" gutterBottom>
            {product.amount_per_price}
          </Typography>
          <Typography className="price" gutterBottom>
            ${product.price}
          </Typography>
        </CardContent>
        <CardMedia className="cardMedia" image={pancakes} />
      </Card>
      <ProductPopUp
        open={open}
        setOpen={setOpen}
        product={product}
      />
    </section>
  );
};

export default ProductCard;
