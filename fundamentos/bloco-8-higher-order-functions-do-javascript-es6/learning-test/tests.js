// const sayHello = () => {
//     return ('hello trybers');
//   }
  
//   const printGreeting = (callback) => {
//       console.log(callback());
//   }
  
//   printGreeting(sayHello);

//   const sumFixAmount = (amount) => {
//     return (number) => amount + number;
//   }
  
//   const initialSum = sumFixAmount('15');
//   console.log(initialSum(5));
//   console.log(initialSum(6));
//   console.log(initialSum(7));
//   console.log(initialSum(8));

// const sum = (num1, num2) => { return num1 + num2 };

// const repeat = (number, action, soma) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(soma( count,20 ));
//     }
//   };
  
//   repeat(5, console.log, sum);

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(3, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });

// const numberGenerator = () => {
//     return Math.random() * 100;
//   }
  
//   console.log(numberGenerator());

const acorda = () => 'Acordando!!';
const bora = () => 'Bora tomar café!!';
const partiu = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func); 

doingThings(acorda());
doingThings(bora());
doingThings(partiu());