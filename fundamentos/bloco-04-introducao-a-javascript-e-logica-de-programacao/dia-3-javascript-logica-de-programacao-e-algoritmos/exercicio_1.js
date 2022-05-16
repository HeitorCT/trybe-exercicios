let num = 10;
let fatorialNum = 1; //menor fatorial possível

for(let i = 1; i < num; i += 1)
    fatorialNum *= i;
    
console.log("O fatorial de "+num+" é: "+fatorialNum);