'use strict';

setTimeout(() => console.log('A'), 1000);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
console.log('E');

// pile d'appels
// ^
// |                             log      log       log log
// |st - st - st - st - log .... =>  .... =>  ..... =>  => 
// 0-----0,5ms----------2ms------2,5ms----501ms-----1s----> temps
//                      E        B        D         A   C

// file d'attente (0ms) : cbB
// file d'attente (2ms) : 
// file d'attente (500ms) : cbD
// file d'attente (501ms) : 
// file d'attente (1000ms) : cbA - cbC
// file d'attente (1001ms) :  cbC

