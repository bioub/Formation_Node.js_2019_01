'use strict';

const nbs = [3, 4, 5];

// programmation impérative
// paradigme (style de programmation)
// enchainement de if, for...
for (let i = 0; i < nbs.length; i++) {
  const element = nbs[i];
  if (element % 2 === 1) {
    console.log(element);
  }
}

// programmation fonctionnelle
// des fonctions remplacent des algo
nbs
  .filter((nb) => nb % 2 === 1)
  // .filter(function(nb) { return nb % 2 === 1 })
  .forEach((nb) => console.log(nb));

console.log('FIN');
// pile d'appels
// ^               log  log
// |=> - => - =>   => - =>
// |filter       - forEach   log
// +------------------------------> temps
//                 3    5    FIN


// faire la somme de tous les éléments avec reduce
// acc: 0, elt: 3 => 3
// acc: 3, elt: 4 => 7
// acc: 7, elt: 5 => 12 (résultat final)
const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log(`La somme du tableau [${nbs}] est ${sum}`);