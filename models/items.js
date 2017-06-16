const mongoose = require('mongoose');
const ObjectId = require('mongoose').Schema.Types.ObjectId;
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const ItemSchema = mongoose.Schema({
  item: {
    itemTitle: { type: String },
    issueNumber: { type: Number }, // check
    hoard: { type: ObjectId, ref: 'hoard' },
    itemDate: { type: Date },
    dateAdded: { type: Date },
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

module.exports = ItemSchema;

