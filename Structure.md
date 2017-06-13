### 06.12.17 up til now what's done:
* express server set up
* authentication works
* db set up - users
* comicvine api test routes set up, working

### 06.13.17 working on:
* `/controllers/item.js`
* `/models/item.js`
* `/models/user.js`
### next:
* make csv mockup, import as item collection mlab
* finish schema item, test
* make methods currency populate/ convert in item controller, test
* make method to populate info from 3rd party api comic vine
* add a form to react to add/ edit issues, test

# Structure -working

### client:
---------
---app
    |---src
        |---actions
        |---reducers
        |---containers
        |---components
        App.css
        App.js
        index.css
        index.js


### server:
---------

----controllers
----datasets
            - dummy data

----models
    --> userSchema: 
         _id
            email
            collections[ 
                collectionName:
                    items [
                    item title
                    item issue#
                    item series name
                    item date
                    own y/n
                    wish y/n
                    item purch date
                    item purch price $cdn
                    item purch price $usd
                    item conversion to usd
                    item conversion to cdn
                    paper
                    grade
                    cgc grade
                    slabbed y/n
                    slabbed later y/n
                    seller
                    comments
                        price updates [
                            ref price updates
                        ]
                    ]
            ]
    --> api-cache Schema:
            volumes [
                issues [
                    issue img
                    issue description
                    other... add more
                ]
            ]
    --> price updates
            [ issue
                yearAndPrice: {year: year, price: price, }
            ]
----
.env
server.js


scratch
  |||
  VVV

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

items: [{ type: Schema.Types.ObjectId, ref: 'item'}]


// choice lists - put in react-redux


// const OPG_PricesSchema = Schema({
    // need years, updated prices by item
// });
// 