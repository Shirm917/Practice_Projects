import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users_router from "./routes/users.js";
import products_router from "./routes/products.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(users_router);
app.use(products_router);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on ${process.env.PORT || 8080}`);
});