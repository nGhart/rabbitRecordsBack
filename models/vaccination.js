const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  medication: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  nextDate: {
    type: Number,
    required: true,
  },

  status: { type: String, required: false, default: 'Pending' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Vaccination = mongoose.model('Vaccination', vaccinationSchema);

module.exports = Vaccination;
