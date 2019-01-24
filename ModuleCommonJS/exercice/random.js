'use strict';


// ici on créé les fonctions random
// exercice : exporter les 2

function random(max) {
  return Math.random() * max;
}

function randomInt(max) {
  return Math.floor(random(max) + 1);
}

exports.random = random;
exports.randomInt = randomInt;