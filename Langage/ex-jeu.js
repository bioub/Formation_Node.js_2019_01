'use strict';

// import de fichier (importe l'API readline)
// qui vient du fichier readline (dans le binaire de Node)
const readline = require('readline');

// configuration de readline
// ici on lit la ligne sur le clavier (process.stdin)
// et on affiche dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// pose une question
// on obtient la réponse avec un callback
function jouer() {
  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    // rejouer :
    jouer();
    // terminé :
    // rl.close();
  });
}

jouer();