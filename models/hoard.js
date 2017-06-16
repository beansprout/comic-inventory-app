const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

// Hoard schema
const HoardSchema = mongoose.Schema({
  collectionName: { type: String, unique: true },
  items: [{ type: ObjectId, ref: 'items' }],
});

module.exports = HoardSchema;
