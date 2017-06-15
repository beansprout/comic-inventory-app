const { Hoard } = require('../models');
const { User } = require('.//models');

module.exports = (app) => {
  const addHoard = (req, res) => {
  const hoard = new Hoard(req.body);
  hoard.save((err, addToHoards) => { // adds a new hoard
      if (err) return res.send(err);
      res.send(addToHoards.data);
    });
};

// const getHoards = (req, res) => {
//     // item find by series and issue
//     // search function
//     // match req.body.params to user, series, item
//         ({}, (err, users) => {
//     if (err) return res.send(err);
//     res.send(item.data);
//   });
// }
// const editItem = (req, res, next) => {
//     // get item

// }
// // comic-book inventory

//     // post - add new issue
//         // add image from comic vine
//             // check cache first
//             // if not get from comic vine
//                 // put in cache
//     // get - issue'

// const getCollections = (req, res) => {
//   //
// }

// }

  app.post('/addHoard', addToHoards);
  app.get('/hoard', getHoards);
};

