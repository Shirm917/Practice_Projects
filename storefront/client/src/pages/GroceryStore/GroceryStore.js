import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import ProductCard from "./ProductCard";
import "./GroceryStore.css";

const GroceryStore = () => {
  const { cart,errorMsg, setErrorMsg } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setErrorMsg("");
  }, []);

  useEffect(() => {
    console.log(cart);
},[cart])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/products");
        console.log(response.data.products);
        setProducts(response.data.products);
      } catch (err) {
        setErrorMsg(err.response.data);
      }
    };
    getProducts();
  }, []);

  return (
    <section className="groceryStore">
      <h1>Products</h1>
      <section className="products">
        {!products || products.length === 0 ? (
          <p className="errorMsg">{errorMsg}</p>
        ) : (
          products.map((product) => {
            return <ProductCard key={product.product_id} product={product} />;
          })
        )}
      </section>
    </section>
  );
};

export default GroceryStore;
