const path = require('path');
const fs = require('fs');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date).toISOString()} - ${msg}\n`;
  return fs.promises.appendFile(filePath, msg);
}

/* version synchrone
try {
  log(logFilePath, 'Ligne 1');
  log(logFilePath, 'Ligne 2');
  log(logFilePath, 'Ligne 3');
  console.log('DONE');
}
catch (err) {
  console.log('Erreur du filesystem, est-ce que le dossier logs existe ?');
}
*/

// async functions (ES2017/ES8)
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