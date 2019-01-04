const path = require('path');
const fs = require('fs');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date).toISOString()} - ${msg}\n`;
  return fs.promises.appendFile(filePath, msg);
}

async function main() {
  try {
    await log(logFilePath, 'Ligne 1');
    await log(logFilePath, 'Ligne 2');
    await log(logFilePath, 'Ligne 3');
    console.log('DONE');
  }
  catch (err) {
    console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
  }
}

main();