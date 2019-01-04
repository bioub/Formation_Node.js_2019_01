const path = require('path');
const fs = require('fs');

// à chaque qu'on fait référence à un dossier/fichier
// créer un chemin absolu avec path.resolve
// (sinon ça dépend du CWD Current Working Dir)
const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date).toISOString()} - ${msg}\n`;
  fs.appendFileSync(filePath, msg);
}

try {
  log(logFilePath, 'Ligne 1');
  log(logFilePath, 'Ligne 2');
  log(logFilePath, 'Ligne 3');
  console.log('DONE');
}
catch (err) {
  console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
}