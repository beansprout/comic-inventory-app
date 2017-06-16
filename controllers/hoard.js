const { Hoard } = require('../models');
/*
routes
- /newHoard adds to parent collection hoard.
- getHoards: get a list of all hoards
- editHoards.
*/
// add to main list of collections.  Using 'hoard' b/c collection is a reserved word
const newHoard = (req, res) => {
  const hoard = new Hoard(req.body);
  hoard.save((err, response) => { // adds a new hoard
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

const editHoard = (req, res) => {
  Hoard.findOneAndUpdate(req.body)
}

module.exports = (app) => {
  app.post('/hoards', newHoard);
  app.get('/hoards', getHoards);
};

