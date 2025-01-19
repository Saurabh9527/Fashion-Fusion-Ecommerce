import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import Cart from "../models/cartModel.js";

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const addOrders = asyncHandler(async (req, res) => {
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
});

export const fetchOrders = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();

  if (!userId) {
    res.status(400);
    throw new Error("User id not provided");
  }

  const orders = await Order.find({ userId })
    .sort({ createdAt: -1 })
    .select('-payment') 
    .populate('products.productId', 'title thumbnail');

  if (!orders.length) {
    return res.status(200).json({ message: "No orders found", orders: [] });
  }

  const formattedOrders = orders.map(order => ({
    _id: order._id,
    userId: order.userId,
    products: order.products,
    totalPrice: order.totalPrice,
    deliveryAddress: order.deliveryAddress,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  }));

  res.status(200).json({
    success: true,
    message: "Orders fetched successfully",
    orders: formattedOrders,
  });
});

export const getOrderDetails = asyncHandler(async (req, res) => {

    const { orderId } = req.params;
    try {
      const order = await Order.findById(orderId)
      .select("-payment") 
      .populate("products.productId", "thumbnail title price");

      if (order) {
        res.status(200).json({
          success: true,
          order,
        }); 
      } else {
        res.status(404); 
        throw new Error("Order not found");
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }

})

export const createRazorpayOrder = asyncHandler(async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount. Please provide a valid amount.",
      });
    }

    const options = {
      amount: Number(amount * 100),
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    const order = await razorpayInstance.orders.create(options);
    res.status(201).json({
      success: true,
      message: "Razorpay order created successfully.",
      orderDetails: order,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order. Please try again later.",
    });
  }
});

export const verifyRazorpayPayment = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();

  try {
    const {
      products,
      totalPrice,
      deliveryAddress,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;
    

    if (
      !products ||
      !totalPrice ||
      !deliveryAddress ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required payment or order details.",
      });
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(sign.toString())
      .digest("hex");

    const isAuthentic = expectedSign === razorpay_signature;

    if (isAuthentic) {
      const order = new Order({
        userId,
        products,
        totalPrice,
        deliveryAddress,
        payment: {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        },
      });
      await order.save();

       const cart = await Cart.findOne({ userId });

       if (cart) {
         const remainingProducts = cart.products.filter(
           (cartProduct) =>
             !products.some(
               (orderedProduct) =>
                 orderedProduct.productId === cartProduct.productId.toString()
             )
         );
 
         if (remainingProducts.length > 0) {
           cart.products = remainingProducts;
           await cart.save();
         } else {
           await Cart.deleteOne({ userId });
         }
       }

      return res.status(201).json({
        success: true,
        message: "Payment verified and order placed successfully.",
        order,
      });
    }else {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature. Payment verification failed.",
      });
    }
    
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while verifying the payment. Please try again.",
    });
  }
});
