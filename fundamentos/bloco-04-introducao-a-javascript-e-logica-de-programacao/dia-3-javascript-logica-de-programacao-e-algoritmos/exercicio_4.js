let listNumbers = [];
let primos = [];

for (let i =0; i<50; i+=1)
    listNumbers [i] = i+1;

for (let i=0; i < listNumbers.length; i+=1){
    let numberDiv = 0;
    for (let y=1; y <= listNumbers.length; y+=1)
        if(listNumbers[i] % y === 0)
            numberDiv += 1;
    if (numberDiv === 2)
        primos.push(listNumbers[i]) 
}
console.log(primos[primos.length-1]);