// 2 manière de créer des nouveaux objets

// 1/ object literal
// - si l'objet est simple à créer
// - s'il y a des méthodes ne pas le créer plusieurs fois (sinon la fonction
// sera dupliquée)
const coords = {
  x: 10,
  y: 20,
};

console.log(coords.x);
console.log(coords.y);

// extension d'objet (ajoute une nouvelle clé)
coords.z = 30;
console.log(coords.z);

// on peut écrire la même chose avec des crochets []
coords['z'] = 30;
console['log'](coords['z']);

// plus dynamique car la clé est une chaine de char
const newKey = 'z';
const logMethod = 'warn';
coords[newKey] = 30;
console[logMethod](coords[newKey]);

// on peut boucler sur les clés d'un objet
for (const key in coords) {
  console.log(key); // x y z
  console.log(coords[key]); // 10 20 30
}

// 2/ constructor function (une fonction appelée avec new)
function Contact(prenom) {
  // arguments[0] ici vaut 'Romain' pour new Contact('Romain')
  // this ici vaut romain pour const romain = new Contact...
  this.prenom = prenom;
}

// permet de ne pas créer la méthode dans l'objet
// (sinon elle serait dupliquée pour chaque objet)
// mais elle reste appelable sur l'objet
// romain.hello() ou jean.hello()
Contact.prototype.hello = function() {
  return `Bonjour je m'appelle ${this.prenom}`;
};


const romain = new Contact('Romain');
console.log(romain.prenom); // Romain
console.log(romain.hello());


const jean = new Contact('Jean');
console.log(jean.prenom); // Jean
console.log(jean.hello());


class Voiture {
  constructor(marque) {
    this.marque = marque;
  }
  infos() {
    return 'Marque : ' + this.marque;
  }
}

/* exactement la meme que 
function Voiture(marque) {
  this.marque = marque;
}

Voiture.prototype.infos = function() {
  return 'Marque : ' + this.marque;
};
*/


const clio = new Voiture('Renault');
console.log(clio.infos());
