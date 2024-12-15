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

// export const fetchProduct = asyncHandler(async (req, res) => {
//   const pageNo = parseInt(req.query.pageNo) || 1;
//   const limit = parseInt(req.query.limit) || 8;

//   const startIndex = (pageNo - 1) * limit;
//   const products = await Product.find()
//   .skip(startIndex)
//   .limit(limit);

//   const totalProducts = await Product.countDocuments();

//   res.status(200).json({
//     success: true,
//     products,
//     totalProducts,
//     currentPage: pageNo,
//     totalPages: Math.ceil(totalProducts / limit),
//   });
// });

export const fetchProduct = asyncHandler(async (req, res) => {
  const pageNo = parseInt(req.query.pageNo) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const category = req.query.category || "";

  const startIndex = (pageNo - 1) * limit;
  const filter =
    category === "" ? {} : { category: { $regex: category, $options: "i" } };

  const products = await Product.find(filter).skip(startIndex).limit(limit);

  const totalProducts = await Product.countDocuments(filter);

  res.status(200).json({
    success: true,
    products,
    totalProducts,
    currentPage: pageNo,
    totalPages: Math.ceil(totalProducts / limit),
  });
});

export const searchProduct = asyncHandler(async (req, res) => {
  const keyword = req.query.q || "";
  const pageNo = parseInt(req.query.pageNo) || 1;
  const limit = parseInt(req.query.limit) || 8;

  if (!keyword) {
    res.status(400);
    throw new Error("Keyword is required for search");
  }

  const startIndex = (pageNo - 1) * limit;

  const filter = {
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } },
    ],
  };

  const products = await Product.find(filter).skip(startIndex).limit(limit);

  const totalProducts = await Product.countDocuments(filter);

  res.status(200).json({
    success: true,
    products,
    totalProducts,
    currentPage: pageNo,
    totalPages: Math.ceil(totalProducts / limit),
  });
});

export const getProduct = asyncHandler(async (req, res) => {
  const { prodId } = req.params;

  const product = await Product.findById(prodId);

  if (product) {
    res.status(200).json({
      success: true,
      product,
    }); 
  } else {
    res.status(404); 
    throw new Error("Product not found");
  }
});
