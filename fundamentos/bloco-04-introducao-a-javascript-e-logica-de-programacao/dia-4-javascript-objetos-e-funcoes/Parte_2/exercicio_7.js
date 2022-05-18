function checkEndWord (word1, word2) {
    let contCorrespondence =0;
    let j;    
    for (let i = word1.length-1, j = word2.length-1; j > -1; i -= 1, j-=1){
            if (word1[i] === word2[j])
            contCorrespondence +=1;
    }    
    if (contCorrespondence === word2.length)
        return (true);
    else    
        return (false);
}
console.log(checkEndWord('trybe','be'));
console.log(checkEndWord('joaofernando', 'fernan'));
