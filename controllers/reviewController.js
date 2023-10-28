const Product = require('../models/Product');
const errorHandler = require('../utils/errorHandler');

// Create a Review for a Product
const addReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.reviews.push(req.body);
    await product.save();
    res.status(201).json(product.reviews[product.reviews.length - 1]);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// Delete a Review
const deleteReview = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const reviewIndex = product.reviews.findIndex(review => review._id.toString() === req.params.reviewId);
    if (reviewIndex === -1) {
      return res.status(404).json({ message: 'Review not found' });
    }

    product.reviews.splice(reviewIndex, 1);
    await product.save();
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// Virtual Population of Reviews for a Product
const getReviewsForProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate('reviews');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product.reviews);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports = {
  addReview,
  deleteReview,
  getReviewsForProduct
};
