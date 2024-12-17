import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/database.js";
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishListRoutes from "./routes/wishListRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config({
  path: ".env",
});
const app = express();
app.use(bodyParser.json());

const corsOptions = {
  //origin: "*",
  origin: ["http://localhost:5173"], 
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productsRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/wishlist", wishListRoutes);
app.use("/api/v1/auth", authRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is listing on ${port}`);
});
