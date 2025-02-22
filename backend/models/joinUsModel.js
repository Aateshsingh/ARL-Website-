const mongoose = require('mongoose');

const joinSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  sentAt: { type: Date, default: Date.now }
});

const Join = mongoose.model('Join', joinSchema);

module.exports = Join;
