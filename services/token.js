require('dotenv').config();

const jwt = require('jwt-simple');
// create token

// encode token with timestamp and user
module.exports = (user) => {
  return jwt.encode({
    sub: user.id,
    iat: new Date().getTime(),
  }, (process.env.SECRET.toString));
};
