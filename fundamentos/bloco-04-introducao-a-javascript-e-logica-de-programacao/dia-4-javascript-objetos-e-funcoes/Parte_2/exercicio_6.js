function sumUpToN(number) {
	let sum = 0;
	for (let i = 0; i <= number; i += 1) 
        sum += i;
    return (sum);
}
console.log(sumUpToN(5));
