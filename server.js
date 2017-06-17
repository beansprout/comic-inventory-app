require('babel-polyfill');
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
// const dbUser = process.env.DB_USER;
// const pass = process.env.PASS;
// const host = process.env.HOST;
// const dbport = process.env.DB_PORT;
// const db = process.env.DB;

// const mongodbUri = `mongodb://${dbUser}:${pass}@${host}:${dbport}/${db}`;

// Mongoose by default sets the auto_reconnect option to true
// add 30 second connection timeout to allow for enough time to connect

// const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//   replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } };

mongoose.connect('mongodb://localhost/comics'); // for testing on local database
// mongoose.connect(mongodbUri, options);
const dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error:'));
dbconnect.once('open', () => {
  // we're connected!
});

require('./controllers')(app);

// --------------test
// import async to make control flow simplier
// const async = require('async');
// const User = mongoose.model('User');

// //define dummy data
// const data = {
//   email: 'chris@email.com',
//   password: '12345',
//   userName: 'CrispyCrunch',
//   hoards: [
//      { hoard: 'The Avengers' },
//      { hoard: 'the Invincible' },
//   ],
// };

  app.get('/', (req, res) => {
    res.send(`Helloooo`);
  });

  app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
