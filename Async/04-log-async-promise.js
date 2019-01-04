const path = require('path');
const fs = require('fs');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date).toISOString()} - ${msg}\n`;
  return fs.promises.appendFile(filePath, msg);
}

log(logFilePath, 'Ligne 1')
  .then(() => log(logFilePath, 'Ligne 2'))
  .then(() => log(logFilePath, 'Ligne 3'))
  .then(() => console.log('DONE'))
  .catch((err) => console.log('Erreur du filesystem, est-ce que le dossier logs existe ?'));
