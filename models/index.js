const mongoose = require('mongoose');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Hoard: mongoose.model('Hoard', require('./hoard')),
  Item: mongoose.model('Item', require('./items')),
};
