const mongoose = require('mongoose');
require('./hoard');

const ItemSchema = mongoose.Schema({
  item: {
    itemTitle: { type: String },
    issueNumber: { type: Number },
    hoard: { type: String, ref: 'Hoard' },
  },
});

module.exports = ItemSchema;

