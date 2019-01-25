const express = require('express');
const model = require('../models/magasin');

const routes = express.Router();

// LISTE des Magasins
routes.get('/', async (req, res) => {
  const magasins = await model.getAllMagasins();
  res.json(magasins);
});

routes.get('/:id', async (req, res) => {
  const id = req.params.id;

  const magasin = await model.getMagasinByCodeMagasin(id);

  if (!magasin) {
    res.statusCode = 404;
    res.json({err: 'Pas de magasin'});
  }

  res.json(magasin);
});

module.exports = routes;