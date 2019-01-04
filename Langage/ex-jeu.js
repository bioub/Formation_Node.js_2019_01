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
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Bien joué');
    rl.close();
  });
}

const entierAlea = Math.floor(Math.random() * 101);
const essais = [];
jouer();