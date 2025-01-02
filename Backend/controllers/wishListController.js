import asyncHandler from "express-async-handler";
import Wishlist from "../models/wishListModel.js";
import Cart from "../models/cartModel.js";

export const addToWishList = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();
  const { productId } = req.body;

  if (!productId) {
    res.status(400);
    throw new Error("Missing fields prodId");
  }

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = new Wishlist({
      userId,
      products: [{ productId }],
    });
  } else {
    const findProductInWishlist = wishlist.products.findIndex(
      (p) => p.productId.toString() === productId
    );

    if (findProductInWishlist === -1) {
      wishlist.products.push({ productId });
    }
  }

  await wishlist.save();

  const populatedWishlist = await wishlist.populate(
    "products.productId",
    "title  thumbnail"
  );

  res.status(200).json({
    success: true,
    message: "Product added to wishlist",
    wishlist: populatedWishlist,
  });
});

export const removeFromWishList = asyncHandler(async (req, res) => {
  //* remove from wishlist and move to cart
  console.log("I hitted wishlist"); 
  const userId = req.user._id.toString();
  const { productId } = req.params;

  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    res.status(404);
    throw new Error("Wishlist not found");
  }

  let cart = await Cart.findOne({ userId });

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

  wishlist.products = wishlist.products.filter(
    (p) => p.productId.toString() !== productId
  );

  await cart.save();
  await wishlist.save();

  res.status(200).json({
    success: true,
    message: "Product moved from wishlist to cart",
    cart,
    wishlist,
  });
});

export const deleteFromWishList = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();
  const { productId } = req.params;

  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }
  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    res.status(404);
    throw new Error("Wishlist not found");
  }

  wishlist.products = wishlist.products.filter(
    (product) => product.productId.toString() !== productId
  );
  await wishlist.save();

  res.status(200).json({
    success: true,
    message: "Product removed from Wishlist",
    wishlist,
  });
});

export const fetchWishListProduct = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();

  if (!userId) {
    res.status(400);
    throw new Error("User id not provided");
  }

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) {
    return res
      .status(200)
      .json({ message: "No items in the wishlist", products: [] });
  }

  const populatedWishlist = await wishlist.populate(
    "products.productId",
    "title thumbnail description discountPercentage"
  );

  res.status(200).json({
    success: true,
    message: "Wishlist fetched successfully",
    wishlist: populatedWishlist,
  });
});
