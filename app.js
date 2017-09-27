const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.get('/', function(req, res) {
  res.type('html');
});

const PORT = 8000;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
