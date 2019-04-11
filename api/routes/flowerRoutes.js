const express = require('express');
const db = require('../../data/dbConfig');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json('hello');
});

module.exports = routes;
