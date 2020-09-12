const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  current: {
    type: Boolean,
    required: true,
    default: true,
  },
  detail: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
