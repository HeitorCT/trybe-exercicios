function indexSmaller( numbers ) {
    let menor = numbers [1];
    for (let i = 0; i < numbers.length; i += 1)
    if (menor > numbers[i])
        menor = numbers[i];
    return (numbers.indexOf(menor));
}
console.log(indexSmaller([2, 4, 6, 7, 10, 0, -3]));