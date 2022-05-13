let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpares = 0;

for (let i = 0; i < numbers.length; i += 1)
    if (numbers[i] % 2 != 0)
        contImpares += 1;

if (contImpares == 0)
    console.log("nenhum valor ímpar encontrado");
else
    console.log("existem " + contImpares + " números impares");