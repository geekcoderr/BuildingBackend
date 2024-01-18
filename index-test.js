const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const mlData = require('./ml.json');

app.get('/', (req, res) => {
  res.send('<a href="/dora"><button>Click me</button></a>');
});

app.get('/dora', (req, res) => {
  res.json(mlData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
