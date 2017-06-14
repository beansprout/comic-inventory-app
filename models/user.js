const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const ObjectId = Schema.ObjectId;

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
    validate: {
      validator: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  user: ObjectId,
  userName: {
    type: String,
    required: true,
  },
  collections: {
    collectionName: { type: String, unique: true },
    // collectionCurrentValue: { type: Currency,
    //   // add current value for collection from updated price
    // },
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
  },
});

UserSchema.pre('save', function(next) {
  // generate the salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash password
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = UserSchema;
