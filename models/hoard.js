const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Hoard schema (collection is a reserved word)
const HoardSchema = mongoose.Schema({
  collectionName: { type: String, unique: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});

module.exports = HoardSchema;
