import db from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await db("products")
    .select(
      "product_id",
      "name",
      "price",
      "stock_number",
      "category",
      "sub_category",
      "description",
      "nutritional_info",
      "amount_per_price",
      "image_path"
    );
    res.status(200).json({ products });
  } catch (err) {
    res.status(404).json({ errorMsg: "Products not found" });
  }
};
