const { Hoard } = require('../models');

const newHoard = (req, res) => {
  const hoard = new Hoard(req.body);
  hoard.save((err, response) => {
    if (err) return res.send(err);
    res.send(response.data);
  });
};

const getHoards = (req, res) => {
  Hoard.find({}, (err, hoards) => {
    if (err) return res.send(err);
    res.send(hoards);
  });
};

module.exports = (app) => {
  app.post('/hoards', newHoard);
  app.get('/hoards', getHoards); 
};

