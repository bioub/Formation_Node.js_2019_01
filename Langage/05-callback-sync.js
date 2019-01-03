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
  .forEach((nb) => console.log(nb));


// pile d'appels
// ^               log  log
// |=> - => - =>   => - =>
// |filter       - forEach
// +-----------------------> temps
//                 3    5