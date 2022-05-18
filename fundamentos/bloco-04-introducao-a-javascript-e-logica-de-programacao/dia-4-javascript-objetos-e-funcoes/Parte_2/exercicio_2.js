function indexLargest( numbers ) {
    let maior = numbers [1];
    for (let i = 0; i < numbers.length; i += 1)
        if (maior < numbers[i])
            maior = numbers[i];
    return (numbers.indexOf(maior));
}
console.log(indexLargest([2, 3, 6, 7, 10, 1]));