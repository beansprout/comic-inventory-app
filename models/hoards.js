const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const Hoards = Schema({
  collectionName: { type: String, unique: true },
  items: [
    {
      type: ObjectId,
      ref: 'item',
    },
  ],
});

module.exports = Hoards;
