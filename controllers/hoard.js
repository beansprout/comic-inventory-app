const models = require('../models');
/*
routes
- /newHoard adds to parent collection hoard.
- getHoards: get a list of all hoards
- editHoards.
*/
// add to main list of collections.  Using 'hoard' b/c collection is a reserved word
const newHoard = (req, res) => {
  const hoard = models.Hoard(req.body);
  hoard.save((err, response) => { // adds a new hoard
    if (err) return res.send(err);
    res.send(response.data);
    });
};

const getHoards = (req, res) => {
    // item find by series and issue
    // search function
    // match req.body.params to user, series, item
        ({}, (err, users) => {
    if (err) return res.send(err);
    res.send(item.data);
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
//     // get - issue'

// const getCollections = (req, res) => {
//   //
// }

module.exports = (app) => {
  app.post('/hoards', newHoard);
  app.get('/hoards', getHoards);
};

