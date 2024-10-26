import asyncHandler from "express-async-handler";
import Product from "../models/productsModel.js";

export const addProduct = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    images,
    thumbnail,
  } = req.body;

  if (
    !title ||
    !description ||
    !category ||
    !price ||
    !stock ||
    !brand ||
    !thumbnail
  ) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const product = new Product({
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    images,
    thumbnail,
  });
  const createdProduct = await product.save();

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    data: createdProduct,
  });
});


export const fetchProduct = asyncHandler(async (req, res) => {
  const pageNo = parseInt(req.query.pageNo) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (pageNo - 1) * limit;
  const products = await Product.find()
  .skip(startIndex)  
  .limit(limit); 

  const totalProducts = await Product.countDocuments();

  res.status(200).json({
    success: true,
    products,
    totalProducts,
    currentPage: pageNo,
    totalPages: Math.ceil(totalProducts / limit),
  });
});
