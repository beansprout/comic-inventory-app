const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const PriceUpdatesSchema = Schema({
    collectionName: {
        type: String //ref user collectionName
    },
    itemIssue: {
        type: String // ref user list of items, must match collection
    },
    priceUpdate: {
        year: { type: Date, options: year}, 
        price: { type: Currency } , options: { usdollars } // TODO how to model currency
});

// if updates added, should match them up with currency value / conversion

module.exports = PriceUpdateSchema;