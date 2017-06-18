const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  itemTitle: { type: String },
  issueNumber: { type: Number },
  collectionName: { type: String, ref: 'Hoard' },
  publisher: String,
  year: Number,
  itemGrade: String,
  itemPurchPrice: Number,
});

module.exports = ItemSchema;

