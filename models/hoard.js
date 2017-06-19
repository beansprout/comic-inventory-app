const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Hoard schema (collection is a reserved word)
const HoardSchema = Schema({
  collectionName: { type: String, unique: true },
  publisher: String,
  year: Number,
  items: [
    { type: Schema.Types.ObjectId, ref: 'Item' },
  ],
});

module.exports = HoardSchema;
