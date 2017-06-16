const { Item } = require('../models');

const newItem = (req, res) => {
  const item = new Item(req.body);
  Item.save((err, response) => { // adds a new Item
    if (err) return res.send(err);
    res.send(response.data);
    });
};

const getItems = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) return res.send(err);
    res.send(items);
  });
};

module.exports = (app) => {
  app.post('/item', newItem);
  app.get('/item/:', getItems);
};
