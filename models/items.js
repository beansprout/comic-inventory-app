const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

ItemSchema = Schema({
      items: {
        itemTitle: { type: String },
    //   itemId: ObjectId,
        issueNumber: { type: Number }, // check
    //   itemSeriesName: { type: String },
    //   itemDate: { type: Date },
    //   dateAdded: Date.now(),
    //   own: { type: Boolean },
    //   wishList: { type: Boolean },
    //   itemPurchDate: { type: Date },
        itemPurchPriceCdn: { type: Currency },
    //   itemPurchPriceUsd: { type: Currency },
    //   itemConversionUsd: { type: Currency },
    //   itemConversionCdn: { type: Currency },
    //   paper: String,
    //   grade: String,
    //   cgcGrade: String,
    //   slabbed: Boolean,
    //   slabbedLater: Boolean,
    //   seller: String,
    //   comments: String,
    //   priceUpdates: {
    //     // from price Updates collection
    //   },
        itemCurrentPrice: { type: Currency, // calculate
        },
      },
})