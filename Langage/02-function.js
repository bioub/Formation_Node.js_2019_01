function hello(name = 'Romain') {
  return 'Hello ' + name;
}

console.log(hello());
console.log(hello('Jean'));

function sum() {
  // pseudo variable (elle est créé automatiquement
  // au moment de l'appel)
  console.log(arguments[3]);
}

sum(4, 5, 6, 7);
sum(4, 5, 6, 12);