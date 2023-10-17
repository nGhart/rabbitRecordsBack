const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  feedName: { type: String, required: true },
  feedQuantity: { type: Number, required: true },
  feedServing: { type: Number, required: true },
  feedDatePurchased: { type: Date, required: false },

  status: { type: String, required: false, default: 'Available' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
