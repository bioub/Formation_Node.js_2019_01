'use strict';

function externe() {
  // portée de closure est également
  // sauvergardé si l'exécution d'externe
  // se termine
  var b = 'b';
  function interne() {
    console.log(b);
  }
  return interne;
}

const hello = externe();
hello();

// pile d'appels
// ^
// |
// |externe - hello/interne
// +-----------------------> temps