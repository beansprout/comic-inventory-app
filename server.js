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

// // --------database connection--------------------
// const dbUser = process.env.DB_USER;
// const pass = process.env.PASS;
// const host = process.env.HOST;
// const dbport = process.env.DB_PORT;
// const db = process.env.DB;

//-------- commented out just for testing starts here---------remove this line when done testing------------
// const mongodbUri = `mongodb://${dbUser}:${pass}@${host}:${dbport}/${db}`;
//---------ends----------------------------------- remove this line when done testing-------------
// Mongoose by default sets the auto_reconnect option to true
// add 30 second connection timeout to allow for enough time to connect

//-------- commented out just for testing starts here---------remove this line when done testing------------
// const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
//   replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } } };

// mongoose.connect(mongodbUri, options);
//-------- commented out just for testing ends here---------remove this line when done testing------------
mongoose.connect('mongodb://localhost/comics');
const dbconnect = mongoose.connection;
dbconnect.on('error', console.error.bind(console, 'connection error:'));
dbconnect.once('open', () => {
  // we're connected!
});
//-----------------------------------------------
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

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

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
