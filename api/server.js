const express = require('express');
const flowerRoutes = require('./routes/flowerRoutes');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('ciao');
});

server.use('/flowers', flowerRoutes);

module.exports = server;
