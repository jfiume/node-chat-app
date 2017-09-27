const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// const chatServer = require('./lib/chatServer');
// chatServer.listen(http);

const PORT = 8000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
