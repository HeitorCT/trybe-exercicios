let word = 'banana';
let inverseW = '';

for(let i = 0; i < word.length; i += 1)
    inverseW += word[(word.length-1)-i];

console.log(inverseW);

