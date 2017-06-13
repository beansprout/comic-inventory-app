const mongoose = require ('mongoose');
, Schema = mongoose.Schema;

// TODO: finish writing ItemSchema

const ItemSchema = Schema({
    _owner : { type: Number, ref: 'User' },
    series: { type: String, ref: 'Series' },
    }
    issueNumber: {
        type: Number,
        required: tru,
    }
    purch_date: 
    purch_price_cdn: // optional 
    purch_price_cdn_calculated: // make function // make function - run if purch price is in us dollars
    purch_price_usd: // optional
    purch_price_usd_calculated: // make function - run if purch price is in cdn dollars
    // grade: {one of array of poss} default null
    // CGCgrade: {one of array of poss} default null
    // paper: one of array of poss
    // slabbed: Boolean, default no
    // slabbed_later: Boolean, default no
    // seller: (one of array of poss)
    comments: String,
    // imgs: pull images from CVdatabase
    
});

// const OPG_PricesSchema = Schema({
    // need years, updated prices by item
// });
// 