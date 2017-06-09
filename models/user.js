const mongoose = require('mongoose');
// import bcrypt
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    //TODO min length
  },
  password: {
    type: String,
    required: true,
    // TODO length
  }
});

UserSchema.pre('save', function (next) ) {
  bcrypt.genSalt(10, (err, salt) => {
    // if no errors...
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      // replaces password with salted hashed password
      next();
    });
  });
});

UserSchema.methods.checkPassword = function(potentialPassword, cb) {
  //use bcrypt to compare potentialPassword with users password
};

module.exports = UserSchema;
