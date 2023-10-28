const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./utils/errorHandler');

dotenv.config();
const app = express();
app.use(express.json());

const  connectDb = async () => {
 await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
});
}


// Apply product and review routes here
app.use('/api/products', productRoutes);
app.use('/api/products/:productId/reviews', reviewRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4021;
app.listen(PORT, () => {
    connectDb();
  console.log(`Server is running on port ${PORT}`);
});

module.exports=app