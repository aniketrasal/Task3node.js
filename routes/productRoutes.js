const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a Product (POST /api/products)
router.post('/', productController.addProduct);

// Read All Products (GET /api/products)
router.get('/', productController.getAllProducts);

// Read Product by ID (GET /api/products/:id)
router.get('/:id', productController.getProductById);

// Update a Product (PUT /api/products/:id)
router.put('/:id', productController.updateProduct);

// Delete a Product (DELETE /api/products/:id)
router.delete('/:id', productController.deleteProduct);

module.exports = router;
