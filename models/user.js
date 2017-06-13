const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

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
  username: {
    type: String,
    required: true,
  },
  collections: {
    collectionName: { type: String, unique: true },
    collectionCurrentValue: { type: Number,
      // add current value for collection from updated price
    },
    items: {
      itemTitle: { type: String },
      issueNumber: { type: Number }, // check
      itemSeriesName: { type: String },
      itemDate: { type: Date },
      dateAdded: Date.now(),
      own: { type: Boolean },
      wishList: { type: Boolean },
      itemPurchDate: { type: Date },
      itemPurchPriceCdn: { type: Number },
//       itemPurchPriceUsd: { type: Number },
//       itemConversionUsd: { type: Number },
//       itemConversionCdn: { type: Number },
      paper: String,
      grade: String,
      cgcGrade: String,
      slabbed: Boolean,
      slabbedLater: Boolean,
      seller: String,
      comments: String,
      priceUpdates: {
        // from price Updates collection
      },
      itemCurrentPrice: { type: Number, // calculate
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
