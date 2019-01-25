'use strict';

function hello(name) {
  return `Hello ${name}`;
}

// si on veut remplacer exports par autre chose
// (un autre objet, une fonction...)
// il faut écrire :
module.exports = hello;