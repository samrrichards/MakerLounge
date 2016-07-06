"use strict";

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);

app.use(bodyParser.json({type: '*/*'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist/')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});

module.exports = app;
