const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const ItemSchema = mongoose.Schema({
  item: {
    itemTitle: { type: String },
    issueNumber: { type: Number }, // check
    hoard: { type: String, ref: 'Hoard' },
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

ItemSchema.plugin(mongooseStringQuery);

module.exports = ItemSchema;

