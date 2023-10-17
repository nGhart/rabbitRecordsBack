const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },

  //you can add multiple schemas
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],

  diseases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disease' }],

  feeds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feed' }],

  matings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mating' }],
  meds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Med' }],
  profile: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
  quarantines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quarantine' }],
  vaccinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vaccination' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
