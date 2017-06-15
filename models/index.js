const mongoose = require('mongoose');

const model = mongoose.model;

module.exports = {
  User: model('User', require('./user')),
  Hoards: model('Hoards', require('./hoards')),  
  // OPGprices: model('OPGprices', require('OPGprices')),
  Item: model('Item', require('./item')),
  Child: model('Child', require('./item')),
};
