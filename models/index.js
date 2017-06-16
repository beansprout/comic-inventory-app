const mongoose = require('mongoose');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Hoard: mongoose.model('Hoard', require('./hoard')),
  // OPGprices: mongoose.model('OPGprices', require('OPGprices')),
  Item: mongoose.model('Item', require('./items')),
};
