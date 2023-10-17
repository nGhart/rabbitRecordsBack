const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: false },
  expiryDate: { type: String, required: true },
  supplier: { type: String, required: false },

  status: { type: String, required: false, default: 'Available' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Med = mongoose.model('Med', medSchema);

module.exports = Med;
