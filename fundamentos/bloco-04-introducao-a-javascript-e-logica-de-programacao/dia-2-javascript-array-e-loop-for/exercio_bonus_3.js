let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultProx = [];
for (let index = 0; index < numbers.length; index += 1) {
    if(index != (numbers.length-1))
        numbersMultProx.push(numbers[index]*numbers[index+1]);
    else
        numbersMultProx.push(numbers[index]*2);
}
console.log("Array original - " + numbers);
console.log("Array multiplicando a pos [index] * pos [index+1] - " + numbersMultProx);