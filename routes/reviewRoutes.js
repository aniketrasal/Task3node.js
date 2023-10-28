const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create a Review for a Product (POST /api/products/:productId/reviews)
router.post('/', reviewController.addReview);

// Delete a Review (DELETE /api/products/:productId/reviews/:reviewId)
router.delete('/:reviewId', reviewController.deleteReview);

// Virtual Population of Reviews for a Product (GET /api/products/:productId/reviews)
router.get('/', reviewController.getReviewsForProduct);

module.exports = router;
