const { User } = require('../models');
const requireAuth = require('../services/passport').requireAuth;
const getTokenForUser = require('../services/token');


const createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.send(err);
    res.send({
      token: getTokenForUser(user),
    });
  });
};


module.exports = (app) => {
  app.post('/users', createUser);
  app.get('/users', requireAuth, getUsers);
};
