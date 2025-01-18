import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true, 
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    deliveryAddress: {
      fullName: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    payment: {
      razorpay_order_id: { type: String },
      razorpay_payment_id: { type: String },
      razorpay_signature: { type: String },
      // status: { type: String, default: "Pending" }, // e.g., Pending, Paid, Failed
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
