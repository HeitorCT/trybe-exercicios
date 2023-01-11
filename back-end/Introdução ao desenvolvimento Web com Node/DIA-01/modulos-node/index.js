const path = require('path');

console.log(path.dirname('/usr/share/gnome'));
console.log(path.resolve('usr', 'share', 'gnome'));

const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');
fs.mkdir