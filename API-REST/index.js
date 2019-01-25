const express = require('express');
const routesContact = require('./routes/contact');
const routesMagasin = require('./routes/magasin');

const app = express();

app.use('/api/contacts', routesContact);
app.use('/api/magasins', routesMagasin);

app.listen(8080, () => {
  // TODO à terme utiliser debug/winston/log4js
  console.log('Server started');
});