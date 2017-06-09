require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // for talking to mongoDB
const bodyParser = require('body-parser');

const axios = require('axios'); // for http requests

const app = express();

// enable cross origin 
//TODO set up options?
app.use(cors());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json());


//--------database connection--------------------
// connects to mlab 
//question: leave here or put somewhere else?

const mongodbUri = 'mongodb://'+process.env.DB_USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DB_PORT+'/'+process.env.DB;
console.log(mongodbUri);
// Mongoose by default sets the auto_reconnect option to true
// add 30 second connection timeout to allow for enough time to connect

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS:   30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, options);

//-----------------------------------------------


const apiKey = process.env.API_KEY;
const baseUrl = process.env.API_URL;

app.get('/', (req, res) => {
  res.send("Hello World");
  console.log('received get request');
});

app.get('/test', (req, res) => {
  const url = `${baseUrl}characters?api_key=${apiKey}&filter=name:${req.params.name}&format=json`;
  axios.get(url).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.send(err);
  });
});

app.listen(8080, (req, res) => {
  console.log('server listening on port 8080');
});

