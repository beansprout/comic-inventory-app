module.exports = 
const axios = require('axios'); // for http requests

const apiKey = process.env.API_KEY;
const baseUrl = process.env.API_URL;

app.get('/', (req, res) => {
  res.send('Hello World');
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
