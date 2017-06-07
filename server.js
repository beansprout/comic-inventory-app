const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require(mongoose);

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/auth');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
  console.log('received get request');;
})

app.listen(5000, (req, res) => {
  console.log('server listening on port 5000');
)};
