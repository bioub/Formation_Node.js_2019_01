
// (function (exports, require, module, __filename, __dirname) { 
/**
 * Additionne 2 nombres (usejsdoc.org)
 * @param {number} a Le premier nombre
 * @param {number} b Le deuxième nombre
 * @returns {number} La somme
 */
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// pour créer une variable global il faut étendre l'objet global (avec une propriété du nom de la variable)
// MAUVAISE PRATIQUE
// global.sum = sum;

// au lieu de créer une variable global on va exporter la fonction
// ATTENTION DE NE PAS OUBLIER LE S A EXPORTS !!!!
exports.sum = sum;
exports.multiply = multiply;

// });