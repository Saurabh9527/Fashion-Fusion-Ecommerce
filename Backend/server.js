import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/database.js";
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishListRoutes from "./routes/wishListRoutes.js";
import addressRoute from "./routes/addressRoute.js";
import orderRoute from './routes/orderRoute.js'
import reviewRoute from './routes/reviewRoute.js'
import otpRoute from './routes/otpRoute.js'
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config({
  path: ".env",
});
const app = express();

const corsOptions = {
  //origin: "*",
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "HEAD", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productsRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/wishlist", wishListRoutes);
app.use("/api/v1/address", addressRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/otp", otpRoute);
app.use("/api/v1/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is listing on ${port}`);
});
