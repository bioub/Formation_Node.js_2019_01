const fs = require('fs');

// version synchone
try {
  const buffer = fs.readFileSync('.editorconfig');
  console.log(buffer.toString('utf-8'));
}
catch (err) {
  console.log('Erreur : ' + err.message);
}

// version asynchone avec callback en dernier paramètre
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    return console.log('Erreur : ' + err.message);
  }
  console.log(buffer.toString('utf-8'));
});

// version asynchone avec promise
fs.promises.readFile('.editorconfig')
  .then((buffer) => {
    console.log(buffer.toString('utf-8'));
  })
  .catch((err) => {
    console.log('Erreur : ' + err.message);
  });

// version asynchone avec async/await
(async () => {
  try {
    const buffer = await fs.promises.readFileSync('.editorconfig');
    console.log(buffer.toString('utf-8'));
  }
  catch (err) {
    console.log('Erreur : ' + err.message);
  }
})();


// version asynchone hybride promise + async/await
(async () => {
  const buffer = await fs.promises.readFileSync('.editorconfig');
  console.log(buffer.toString('utf-8'));
})()
  .catch((err) => console.log('Erreur : ' + err.message));