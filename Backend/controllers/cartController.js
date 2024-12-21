import asyncHandler from "express-async-handler";
import Cart from "../models/cartModel.js";

export const addToCart = asyncHandler(async (req, res) => {

    //* this will handle add product in cart first time also if again user added same product so increase just quantity
    //* so use this same route in frontend also on "ADD" button and in "+" button
  const userId = req.user._id.toString();
  const { productId } = req.body;

  if (!productId) {
    res.status(400);
    throw new Error("Missing fields prodId");
  }

  let cart = await Cart.findOne({ userId }); //find the user cart

  if (!cart) {
    //if cart not exist
    cart = new Cart({
      userId,
      products: [{ productId, quantity: 1 }],
    });
  } else {
    const findProductInCart = cart.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (findProductInCart > -1) {
      cart.products[findProductInCart].quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });
    }
  }

  await cart.save();

  const populatedCart = await cart.populate(
    "products.productId",
    "title price thumbnail"
  );

  res.status(200).json(populatedCart);
});

export const fetchCartProducts = asyncHandler(async (req, res) => {

  const userId = req.user._id.toString();

  if (!userId) {
    res.status(400);
    throw new Error("User id not provided");
  }

  let cart = await Cart.findOne({ userId });
  if (!cart) {
    return res
      .status(200)
      .json({ message: "No items in the cart", products: [] });
  }

  const populatedCart = await cart.populate(
    "products.productId",
    "title price thumbnail discountPercentage"
  );

  res.status(200).json(populatedCart);
});

export const updateCartProduct = asyncHandler (async (req, res) => {
     //* try to take quanity in like options arrow like amazon
     
     const userId = req.user._id.toString();
     const { productId } = req.params;
     const { quantity } = req.body;

     if (!productId || quantity === undefined) {
        res.status(400);
        throw new Error("Product ID and new quantity are required");
      }

      let cart = await Cart.findOne({ userId });

      if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
      }

      const findProduct = cart.products.findIndex(
        (product) => product.productId.toString() === productId
      );

      if (findProduct === -1) {
        res.status(404);
        throw new Error("Product not found in cart");
      }

      cart.products[findProduct].quantity = quantity;
      await cart.save();

      res.status(200).json({
        success: true,
        message: "Product quantity updated",
        cart,
      });
});

export const deleteCartProduct = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();
  const { productId } = req.params;
  
  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    res.status(404);
    throw new Error("Cart not found");
  }

  cart.products = cart.products.filter(
    (product) => product.productId.toString() !== productId
  );
  await cart.save();

  res.status(200).json({
    success: true,
    message: "Product removed from cart",
    cart,
  });

  //In Frontend
  // const handleDelete = async (productId) => {
  //     try {
  //       const response = await fetch(`/cart/${productId}`, {
  //         method: 'POST',
});
