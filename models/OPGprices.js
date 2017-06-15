const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const OPGSchema = Schema({
    OPGprices: [
        { collectionId: [{ type: ObjectId , ref: 'Collections'}],
            itemId: [{ type: ObjectId , ref: 'Items'}]
                year: { 
                    type: Date, 
                    options: year,
                    unique: true,
                }, 
                price: { 
                    type: Currency,
                    options: { usdollars } // TODO how to model currency
                }
        }
    ]
});

// if updates added, should match them up with currency value / conversion

module.exports = PriceUpdateSchema;