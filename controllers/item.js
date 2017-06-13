const { Item } = require('../models');

const createItem = (req, res) => {
    const item = new Item(req.body);
    item.save((err, item) => {
        if (err) return res.send(err);
        res.send(item),
    });
};
    
const getItem = (req, res) => {
    // item find by series and issue
    // search function
    // match req.body.params to user, series, item
        ({}, (err, users) => {
    if (err) return res.send(err);
    res.send(item.data);
  });
}
const editItem = (req, res, next) => {
    // get item
    
}
// comic-book inventory
    
    // post - add new issue
        // add image from comic vine 
            // check cache first
            // if not get from comic vine
                // put in cache
    // get - issue'
module.exports = (app) => {
  app.post('/item', createItem);
  app.get('/item',  getItem);
};

    

