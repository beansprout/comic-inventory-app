const { Item } = require('../models');

const newItem = (req, res) => {
  const item = new Item(req.body);
  item.save((err, response) => { // adds a new Item
    if (err) return res.send(err);
    res.send(response.data);
  });
};

// get all items
const getItems = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) return res.send(err);
    res.send(items);
  });
};

// const findItem = (req, res) => {
//   Item.(req.params, (err, items) {
//     if (err) return res.send(err);
//     res.send(items);
//   });
// };

module.exports = (app) => {
  app.post('/item', newItem);
  app.get('/items', getItems);
  // app.get('/item', findItem);
};
