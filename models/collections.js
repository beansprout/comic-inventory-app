const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schemas.Types.ObjectId;

const Collection = Schema({
  collection: { type: String, unique: true },    
});

const item 

 // Not in schema - add to controllers?
 // collectionCurrentValue: 