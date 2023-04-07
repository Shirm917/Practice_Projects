import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import Modal from "../../components/Modal";

const GroceryStore = () => {
  const { setErrorMsg } = useContext(AppContext);
  const [products, setProducts] = useState([]);

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
    <section>
      <h1>Products</h1>

      <Modal/>
    </section>
  );
};

export default GroceryStore;
