let array = ['python', 'java', 'css', 'html', 'javascript'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i+=1) {
    if (array[i].length < menorPalavra.length)
        menorPalavra = array[i];
    if (maiorPalavra.length < array[i].length)
        maiorPalavra = array[i];
}
console.log('maior palavra = '+maiorPalavra);
console.log('menor palavra = '+menorPalavra);