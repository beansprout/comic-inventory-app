const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schemas.Types.ObjectId;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Hoards = Schema({
  collectionName: { type: String, unique: true },
});

