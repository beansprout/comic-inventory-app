const mongoose = require ('mongoose');
, Schema = mongoose.Schema;

const PriceUpdatesSchema = Schema({
    collectionName: {
        //ref user collectionName
    },
    itemIssue: {
        // ref user list of items, must match collection
    },
    priceUpdate: {
        year: { type: Date, options: year}, 
        price: { type: Number, options: { usdollars } } // TODO how to model currency
});

// if updates added, should match them up with currency value / conversion

module.exports = PriceUpdateSchema;