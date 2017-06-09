const express = require('express');
const mongodb = require('mongodb');
const mongodbUri = require('mongodb-uri'); // for converting standard mongoDB uri to mongoose-usable string uri
const mongoose = require('mongoose'); // for talking to mongoDB
const bodyParser = require('body-parser');
// const axios = require('axios'); // for http requests

const uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DB;

// Reformat to a Mongoose connect string and connect() 
const mongooseConnectString = mongodbUri.formatMongoose(uri);
console.log(mongooseConnectString);
// Mongoose by default sets the auto_reconnect option to true
// add 30 second connection timeout to allow for enough time to connect

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS:   30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       

// mongoose.Promise = global.Promise;
mongoose.connect(mongooseConnectString, options);
console.log(mongooseConnectString);

var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

// Test for connection success 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
  console.log('received get request');;
})

app.listen(8080, (req, res) => {
  console.log('server listening on port 8080');
});
