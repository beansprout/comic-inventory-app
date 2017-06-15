const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const ItemSchema = Schema({
  item: {
    itemTitle: { type: String },
    issueNumber: { type: Number }, // check
    hoard: { type: String, ref: 'Hoard', require: true },
    itemDate: { type: Date },
    dateAdded: Date.now(),
    own: { type: Boolean },
    wishList: { type: Boolean },
    itemPurchDate: { type: Date },
    itemPurchPriceCdn: { type: Currency },
    itemPurchPriceUsd: { type: Currency },
    itemConversionUsd: { type: Currency },
    itemConversionCdn: { type: Currency },
    paper: String,
    grade: String,
    cgcGrade: String,
    slabbed: Boolean,
    slabbedLater: Boolean,
    seller: String,
    comments: String,
    // priceUpdates: [
    //         { type: ObjectId, ref: 'OPGprices' },
    // ],
    itemCurrentPrice: { type: Currency }, // calculate
  },
});

// define child schema so items remain separate in case too many items
// hoard parent category might get too large.
const ChildSchema = Schema(
  {
    name: String,
    hoard: { type: ObjectId, ref: 'Hoards' },
  });

module.exports = { ItemSchema, ChildSchema };

