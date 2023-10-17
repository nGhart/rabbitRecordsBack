const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, required: true },
  dob: { type: Date, required: true },
  bred: { type: String, required: false },
  breed: { type: String, required: false },
  dame: { type: String, required: true },
  sire: { type: String, required: true },
  grandDame: { type: String, required: false },
  grandSire: { type: String, required: false },
  weightCurrent: { type: Number, required: false },
  weightSale: { type: Number, required: false },
  totalService: { type: Number, required: false },
  totalLitters: { type: Number, required: false },
  totalKits: { type: Number, required: false },
  aliveKits: { type: Number, required: false },
  deadKits: { type: Number, required: false },
  soldKits: { type: Number, required: false },
  butcheredKits: { type: Number, required: false },
  status: { type: String, required: false, default: 'Available' },
  pic: {
    type: String,
    required: false,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQjJpajje8mPzBmZL1Ye0V4zYyCtHC2p0gw&usqp=CAU',
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
