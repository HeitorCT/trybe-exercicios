const readline = require("readline-sync");

const weight = readline.questionFloat("What is your weight in Kilograms ");
const height = readline.questionFloat("What is your height in Meters ");

const calcBMI = (weight = 65, height = 1.8) => {
	return weight / Math.pow(height, 2);
};

console.log(calcBMI());
