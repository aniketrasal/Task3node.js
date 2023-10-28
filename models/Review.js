const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  cDate: { type: Date, default: Date.now },
  uDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
