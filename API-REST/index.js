const express = require('express');
const routesContact = require('./routes/contact');
const routesMagasin = require('./routes/magasin');
const oracle = require('./utils/oracle');

(async () => {
  // Démarre le pool de connection Oracle
  await oracle.initPool();

  const app = express();

  app.use('/api/contacts', routesContact);
  app.use('/api/magasins', routesMagasin);

  app.listen(8080, () => {
    // TODO à terme utiliser debug/winston/log4js
    console.log('Server started');
  });
})();

