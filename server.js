require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // for talking to mongoDB
const bodyParser = require('body-parser');
const axios = require('axios'); // for http requests
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//--------database connection--------------------
const dbUser = process.env.DB_USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const dbport = process.env.DB_PORT;
const db = process.env.DB;

const mongodbUri = `mongodb://${dbUser}:${pass}@${host}:${dbport}/${db}`;
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

app.get('/volumes', (req, res) => {
  const url = `${baseUrl}volumes?api_key=${apiKey}&filter=name:${req.params.name}&format=json`;
  axios.get(url).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.send(err);
  });
});

app.get('/issues', (req, res) => {
  const url = `${baseUrl}volumes?api_key=${apiKey}&filter=name:${req.params.name}&format=json`;
  axios.get(url).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.send(err);
  });
});

app.get('/publishers', (req, res) => {
  const url = `${baseUrl}volumes?api_key=${apiKey}&filter=name:${req.params.name}&format=json`;
  axios.get(url).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.send(err);
  });
});


app.get('/search', (req, res) => {
  const url = `${baseUrl}volumes?api_key=${apiKey}&filter=name:${req.params.name}&format=json`;
  axios.get(url).then((response) => {
    res.send(response.data);
  }).catch((err) => {
    res.send(err);
  });
});


app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});

