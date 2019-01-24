const express = require('express');

const app = express();
const path = require('path');

const contacts = [{
  prenom: 'Romain',
  id: 12,
}, {
  prenom: 'Eric',
  id: 22,
}];

// 1/ Créé l'URL GET /api/contacts
// qui répond en JSON le tableau de contacts

// 2/ Créé l'URL GET /api/contacts/:id
// qui répond en JSON le contact dont l'id est dans l'URL
// penser à convertir l'id en Number

// 3/ Ajouter une erreur 404 si l'id n'est pas dans l'URL


app.get('/', (req, res) => {
  res.send('Bonjour');
});

app.get('/redirect-google', (req, res) => {
  res.redirect('http://www.google.com/');
});

app.get('/exemple', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'exemple.html'));
});

app.get('/json', (req, res) => {
  res.json(contacts);
});

// quelque soit la méthode HTTP (URL fixe)
app.all('/toto', (req, res) => {
  res.send('Page toto');
});

// quelque soit la méthode HTTP (URL qui commence par)
app.use('/erreur', (req, res) => {
  res.send('Page erreur');
});

// on peut remplacer :name par quelque chose
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send('Hello ' + name);
});

app.listen(8080, () => {
  console.log('Server started');
});