'use strict';

// Node.js créé automatiquement une fonction autour de chaque fichier
// donc les variables ou fonctions créé sont locales au fichier
// on appelle celà un module JavaScript
// (function (exports, require, module, __filename, __dirname) { 

// la fonction require permet d'inclure un fichier (on ne met pas l'extension .js)
// si le fichier est local (créé par nous), il faut commencer obligatoire par ./ (le dossier courant) ou ../ (le dossier parent)

// Pour importer les valeurs exportées par le fichier (ici my-math)
// on utilise la valeur de retour de require
// le retour de require ici === exports dans le fichier
// myMath ici === exports dans le fichier my-math

const myMath = require('./my-math')



console.log(myMath.sum(1, 2));
console.log(myMath.multiply(2, 2));

// });