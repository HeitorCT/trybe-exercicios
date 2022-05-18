function verificaPalindromo( word ) {
    let arrayTemp = word.split("");
    arrayTemp = arrayTemp.reverse();
    wordReverse = arrayTemp.join("");
    if(word === wordReverse)
        return true;
    else
        return false;
}

console.log(verificaPalindromo("amor a roma"));
