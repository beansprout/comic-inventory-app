const { Collection } = require('../models');

module.exports = (app) => {

const createCollection = (req, res) => {
    const collection = new Collection(req.body);
    collection.save((err, item) => {
        if (err) return res.send(err);
        res.send(item),
    });
};
    
// const getItem = (req, res) => {
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

  app.post('/collection', createCollection);
  app.get('/collection',  getCollection);
};

    

