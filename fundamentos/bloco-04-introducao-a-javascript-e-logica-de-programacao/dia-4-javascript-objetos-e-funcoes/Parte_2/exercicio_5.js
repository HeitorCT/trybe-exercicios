function mostFrequentNumber( numbers ) {
    let contMFrequency =0;
    let numFrequent;
    for (let i = 0; i < numbers.length; i+=1){
        let contTemp = 0;
        for (let j = 0; j < numbers.length; j+=1)
            if(numbers[i]===numbers[j])
                contTemp += 1;
        if (contTemp > contMFrequency){
            numFrequent = numbers [i];
            contMFrequency = contTemp;  
        }
    }
    return (numFrequent);
}
console.log(mostFrequentNumber([2, 3, 2, 5, 8, 2, 3]));