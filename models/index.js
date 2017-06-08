const mongoose = require('mongooose');

module.exports = {
  User: mongoose.model('User', require('./user')),
};
