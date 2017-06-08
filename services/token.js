// create token

const jwt = require('jwt-simple');
const config = require('../config');

//encode token with timestamp and user
module.exports = (user) => {
  return jwt.encode({
    sub: user.id,
    iat: new Date().getTime(),
  }, config.secret);
};
