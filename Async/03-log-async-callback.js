const path = require('path');
const fs = require('fs');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg, cb) {
  msg = `${(new Date).toISOString()} - ${msg}\n`;
  fs.appendFile(filePath, msg, cb);
}

// Callback Hell / Pyramid of doom
log(logFilePath, 'Ligne 1', (err) => {
  if (err) {
    return console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
  }
  log(logFilePath, 'Ligne 2', (err) => {
    if (err) {
      return console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
    }
    log(logFilePath, 'Ligne 3', () => {
      if (err) {
        return console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
      }
      console.log('DONE');
    });
  });
});
