import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import ProductCard from "./ProductCard";
import Modal from "../../components/Modal";

const GroceryStore = () => {
  const { setErrorMsg } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data.products);
      } catch (err) {
        setErrorMsg(err.response.data);
      }
    };
    getProducts();
  }, []);

  return (
    <section>
      <h1>Products</h1>
      {products &&
        products.map(product => {
          return <ProductCard key={product.product_id} product={product} />;
        })}
      <Modal />
    </section>
  );
};

export default GroceryStore;
