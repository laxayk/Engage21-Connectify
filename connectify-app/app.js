require('dotenv').config();

// Node/Express
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./public/router');


// Create Express webapp
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Add body parser for Notify device registration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router);

// Get Sync Service Details for lazy creation of default service if needed


// Create http server and run it
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});

module.exports = app;
