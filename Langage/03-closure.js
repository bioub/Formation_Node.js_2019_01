var a = 'a';
function externe() {
  // portée de closure
  var b = 'b';
  function interne() {
    var c = 'c';
    console.log(a); // a
    console.log(b); // b
    console.log(c); // c
  }
  interne();
}

externe();
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |interne
// |externe
// +-----------------------> temps