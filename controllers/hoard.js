const { Hoard } = require('../models');

/*
routes: 
- addHoard: adds a new collection to list of collections
- getHoards: get a list of collections
- editHoards.

*/
module.exports = (app) => {
  const addHoard = (req, res) => {
    const hoard = new Hoard(req.body);
    hoard.save((err, data) => { // adds a new hoard
      if (err) return res.send(err);
      res.send(data.data);
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

  app.post('/addHoard', data.data);
  app.get('/hoard', getHoards);
};

