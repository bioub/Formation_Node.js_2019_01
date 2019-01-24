/*
1 - Créer une variable csvPath, qui contient
le chemin absolu entre la racine du disque
et le fichier stats.csv
*/
const path = require('path');
const fs = require('fs');
const csvPath = path.resolve(__dirname, 'stats.csv');


(async function () {
  /*
  2 - Utiliser (style au choix sync/async/promises...)
  la fonction readFile (ou readFileSync si sync) pour lire
  le contenu du fichier
  */
  const buffer = await fs.promises.readFile(csvPath);

  /*
  3 - Transformer le contenu en une chaine de caractères avec
  .toString()
  */
  const content = buffer.toString('utf-8');

  /*
  4 - Utiliser la méthode .split pour transformer cette chaine
  en tableau de ligne (sur le séparateur \n)
  */
  const lines = content.split('\n');

  /*
  5 - Pour chaque ligne, utiliser à nouveau la méthode .split
  pour transformer la ligne en un tableau [navigateur, stat]
  (sur le séparateur ,)
  */
  for (const line of lines) {
    const data = line.split(',');

    /*
    6 - Afficher chaque ligne sous la forme :
    console.log("Chrome (all)", 63.16);
    */
    if (data.length >= 2) {
      console.log(data[0], data[1]);
    }
  }
})();








