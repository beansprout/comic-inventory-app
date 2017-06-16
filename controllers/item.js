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
// const editItem = (req, res, next) => {
//     // get item

// }
// // comic-book inventory

//     // post - add new issue
//         // add image from comic vine
//             // check cache first
//             // if not get from comic vine
//                 // put in cache

module.exports = (app) => {
  app.post('/item', newitem);
  app.get('/item/:', getitem);
};