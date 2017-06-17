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

const findHoard = (req, res) => {
  Hoard.apiQuery(req.params, (err, items) {
    if (err) return res.send(err);
    res.send(items);
  });
};
module.exports = (app) => {
  app.post('/hoards', newHoard);
  app.get('/hoards', getHoards);
};

