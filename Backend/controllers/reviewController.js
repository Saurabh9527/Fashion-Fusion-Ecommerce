import asyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";
import Product from "../models/productsModel.js";

export const addReview = asyncHandler(async (req, res) => {
  const userId = req.user._id.toString();
  const { productId, name, rating, comment, title } = req.body;

  if (!userId || !productId || !name || !rating || !comment || !title) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 1 and 5." });
  }

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }

  const existingReview = await Review.findOne({ userId, productId });
  if (existingReview) {
    return res
      .status(400)
      .json({ message: "You have already reviewed this product." });
  }

  const newReview = new Review({
    userId,
    productId,
    name,
    title,
    rating,
    comment,
  });

  const savedReview = await newReview.save();

  res.status(201).json({
    message: "Review added successfully.",
    success: true,
    savedReview,
  });
});

export const getReviews = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const reviews = await Review.find({ productId }).sort({ createdAt: -1 });

  if (reviews.length === 0) {
    return res.status(404).json({
      message: "No reviews found for this product.",
      success: false,
    });
  }

  res.status(200).json({
    message: "Review Fetched successfully.",
    success: true,
    reviews: reviews,
  });
});

export const deleteReview = asyncHandler(async (req, res) => {
  
  const userId = req.user._id.toString();
  const { reviewId } = req.params;

  if (!reviewId) {
    return res.status(404).json({
      message: "Review ID is required.",
      success: false,
    });
  }

  const review = await Review.findById(reviewId);

  if (!review) {
    return res.status(404).json({
      message: "Review not found.",
      success: false,
    });
  }

  if (review.userId.toString() !== userId) {
    return res.status(403).json({
      message: "You are not authorized to delete this review.",
      success: false,
    });
  }

  await Review.findByIdAndDelete(reviewId);

  res.status(200).json({
    message: "Review Deleted successfully.",
    success: true,
  });
});

// export const editReview = asyncHandler( async(req, res) => {

// })
