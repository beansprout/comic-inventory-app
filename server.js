const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // for http requests
const mongoose = require('mongoose'); // for talking to mongoDB

//Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname
const uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORT+'/'+process.env.DB;

mongoose.Promise = global.Promise;
mongoose.connect(uri);

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
  console.log('received get request');;
})

app.listen(8080, (req, res) => {
  console.log('server listening on port 8080');
});
