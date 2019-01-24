const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// 4 type de stream :
// Lecture (ReadStream), lire et rediriger la sortie
// Ecriture (WriteStream), écrire et recevoir une entrée
// Lecture/Ecriture (DuplexStream), les 2 précédents à la fois
// TransformStream,  recevoir une entrée, transformer et  rediriger la sortie

const eventFilePath = path.resolve(__dirname, '01-events.js');
const readStream = fs.createReadStream(eventFilePath);

// readStream.on('readable', () => {
//   let chunk;
//   while (null !== (chunk = readStream.read())) {
//     console.log(`Received ${chunk.length} bytes of data.`);
//   }
// });

// Pour zipper et afficher dans la conbsole en 3 lignes
// cat 01-events.js | gzip | echo 
readStream
  .pipe(zlib.createGzip())
  .pipe(process.stdout);