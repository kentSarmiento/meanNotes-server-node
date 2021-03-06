const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User001",
    required: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List010",
    required: true,
  },

  id: { type: String },
  title: { type: String, required: true },
  finished: { type: Boolean },
  rank: { type: Number },
  updated: { type: Date },
  version: { type: Number },
  locked: { type: Boolean },
  personal: { type: Boolean }
});

module.exports = mongoose.model('Task020', taskSchema);
