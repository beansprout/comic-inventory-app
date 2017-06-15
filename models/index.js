const mongoose = require('mongoose');
const model = mongoose.model;

module.exports = {
  User: model('User', require('./user')),
  // Collection: model('Collections', require('./collections')),  
  // Item: model('Items', require('./items')),
  // OPGprices: model('OPGprices', require('OPGprices')),
};
