const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
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
    userName: {
      type: String,
      required: true,
    },
    hoards: [
      { type: Schema.Types.ObjectId, ref: 'Hoard' },
    ],
    itemsInUserHoard: [
      {
        type: Schema.Types.ObjectId, ref: 'Item', 
        itemGrade: String,
        itemPurchPrice: Number,
      },
    ],
  });

UserSchema.pre('save', function (next) {
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

UserSchema.methods.checkPassword = function (potentialPassword, cb) {
  bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = UserSchema;
