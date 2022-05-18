function findLargestrWord( words ) {
    let largestWord = words[0];
    for (let i = 0; i < words.length; i+=1)
        if (largestWord.length < words[i].length)
            largestWord = words[i];    
    return (largestWord);
}
console.log(findLargestrWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));