'use strict';

console.log('Hello');

/**
 * Additionne 2 nombres
 * @param {number} a Le premier nombre
 * @param {number} b Le deuxième nombre
 * @returns {number} La somme
 */
function sum(a, b) {
  return a + b;
}

for (var i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
