

import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

export const addOrders = asyncHandler( async(req, res)=>{
    //take quantity
    //product
    //address

    const userId = req.user._id.toString();
    const { products, totalPrice, address } = req.body;

    if (!products || !totalPrice || !address) {
        res.status(400);
        throw new Error("Product ID is required");
      }

      const newOrder = new Order({
        userId,
        products,
        totalPrice,
        address,
      });

      await newOrder.save();
      res.status(200).json({
        success: true,
        message: "Order created successfully",
        order: newOrder,
      });
})

export const fetchOrders = asyncHandler( async(req, res) => {
    const userId = req.user._id.toString();

    if (!userId) {
      res.status(400);
      throw new Error("User id not provided");
    }

    const orders = await Order.find({ userId }).populate(
        "products.productId",
        "title thumbnail"
      );
    
      if (!orders.length) {
        return res.status(200).json({ message: "No orders found", orders: [] });
      }

      
  res.status(200).json({
    success: true,
    message: "Orders fetched successfully",
    orders: orders,
  });
})