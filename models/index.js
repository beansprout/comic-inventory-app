const mongoose = require('mongoose');

const model = mongoose.model;

module.exports = {
  User: model('User', require('./user')),
  Hoards: model('Hoards', require('./hoards')),
  // OPGprices: model('OPGprices', require('OPGprices')),
  Item: model('Item', require('./items')),
  Child: model('Child', require('./items')),
};
