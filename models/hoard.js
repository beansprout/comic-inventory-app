const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseStringQuery = require('mongoose-string-query');

// Hoard schema
const HoardSchema = mongoose.Schema({
  collectionName: { type: String, unique: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
});

HoardSchema.plugin(mongooseStringQuery);

module.exports = HoardSchema;
