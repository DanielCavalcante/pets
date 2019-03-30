const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
  name: { type: String, required: true },
  raca: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Pet', PetSchema);
