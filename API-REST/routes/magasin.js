const express = require('express');
const model = require('../models/magasin');

const routes = express.Router();

// LISTE des Magasins
routes.get('/', async (req, res) => {
  const magasins = await model.getAllMagasins();
  res.json(magasins);
});

routes.get('/:id', (req, res) => {
  res.json({});
});

module.exports = routes;