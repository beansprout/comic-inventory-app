require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose'); // for talking to mongoDB

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// --------database connection--------------------
const dbUser = process.env.DB_USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const dbport = process.env.DB_PORT;
const db = process.env.DB;

const mongodbUri = `mongodb://${dbUser}:${pass}@${host}:${dbport}/${db}`;

// Mongoose by default sets the auto_reconnect option to true
// add 30 second connection timeout to allow for enough time to connect
const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } };

mongoose.connect(mongodbUri, options);
const dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error:'));
dbconnect.once('open', () => {
  // we're connected!
});
//-----------------------------------------------
 
 app.get('/', (req, res) => {
    res.send('Hello World');
  });

require('./controllers')(app);
require('./routes')(app);

// --------------test
// import async to make control flow simplier
const async = require('async');
const User = mongoose.model('User');

//define dummy data
const data = [
{
  email: 'chris@email.com',
  password: '12345',
  user: ObjectId,
  userName: 'CrispyCrunch',
  collections: [
            [ 'The Avengers' ,
                [
                  { 
                    itemId: ObjectId,
                    issueNumber: 1,
                  },
                  {
                    itemId: ObjectId,
                    issueNumber: 2,
                    itemSeriesName: '', 
                    itemDate: '', 
                    dateAdded: '', 
                    OWN: true, 
                    wishList: '', 
                    itemPurchPrice: 130, 
                    paper: '',
                    GRADE: 3.5,
                    CGC_GRADE: '',
                    slabbed: false, 
                    slabbedLater: false, 
                    SELLER: 'comicconnect',
                    COMMENTS: 'CGC', 
                    priceUpdates: [
                        {
                            year:2013, 
                            price:150
                        },
                        {   
                            year:2014, 
                            price:175
                        }, 
                    ],
                itemCurrentPrice: 175
                },
            ],
      ],
      ['Dagar the Invincible',
           [
              {
                itemId: ObjectId,
                issueNumber: 1,
                },
              {
                itemId: ObjectId,
                issueNumber: 2,
                itemSeriesName: '', 
                itemDate: '', 
                dateAdded: '', 
                OWN: true, 
                wishList: false, 
                itemPurchPrice: 120, 
                paper: '',
                GRADE: '3.5',
                CGC_GRADE: '',
                slabbed: false, 
                slabbedLater: false, 
                SELLER: 'comicconnect',
                COMMENTS: 'CGC', 
                priceUpdates: [
                    {
                        year:2013, 
                        price:150
                    },
                    {   
                        year:2014, 
                        price:175
                    }, 
                ],
            itemCurrentPrice: 175     
      }
    ]
  ]

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
