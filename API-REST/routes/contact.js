// 1/ Créé l'URL GET /api/contacts
// qui répond en JSON le tableau de contacts

// 2/ Créé l'URL GET /api/contacts/:id
// qui répond en JSON le contact dont l'id est dans l'URL
// penser à convertir l'id en Number

// 3/ Ajouter une erreur 404 si l'id n'est pas dans l'URL
const express = require('express');

const routes = express.Router();

const contacts = [{
  prenom: 'Romain',
  id: 12,
}, {
  prenom: 'Eric',
  id: 22,
}];

routes.get('/', (req, res) => {
  res.json(contacts);
});

routes.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const contact = contacts.find((c) => c.id === id);

  // si pas de contact on répond une erreur 404
  if (!contact) {
    res.statusCode = 404;
    res.json({err: 'Contact not found'});
  }

  res.json(contact);
});

module.exports = routes;