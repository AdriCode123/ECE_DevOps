'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from Docker! this project is made by adrien & celia');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
