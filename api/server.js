const express = require('express');
const Flowers = require('../flowers/flowersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('Hello');
});

server.get('/flowers', async (req, res) => {
  const allFlowers = await Flowers.all();
  res.status(200).json(allFlowers);
});

server.post('/flowers', async (req, res) => {
  if (req.body.flower) {
    try {
      await Flowers.insert({ flower: req.body.flower });
      res.status(201).json({ message: 'New flower created' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: 'Please include the flower' });
  }
});

server.delete('/:id', async (req, res) => {
  try {
    await Flowers.remove({ id: req.params.id });
    res.status(202).json({ message: 'Flower deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = server;
