// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);
// const words = ['zezim', 'doidin', 'leribiruta', 32, 0.25, {objeto: doido}];

// numbers.forEach();
// words.forEach();
// console.log(firstMultipleOf5);
// // 50

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element, index) => {
//   this.element = (`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2, index);

// console.log(numbers);

// numbers.forEach((element,index) => {
//     numbers[index] = (`${element} * 2: ${element * 2}`);
// });

// console.log(numbers);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index, array) => {
//   //names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];

//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };

//  emailListInData.forEach(showEmailList);

const numbers = [19, 21, 30, 3, 45, 22, 15];

// function findDivisibleBy3And5 (number) {
//   return number % 3 === 0 && number % 5 === 0;
// }

// console.log(findDivisibleBy3And5(15));

// console.log((numbers.find(findDivisibleBy3And5)));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (name) => {
//   return name.length === 5;
// }

// console.log(names.find(findNameWithFiveLetters));

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   // Adicione seu código aqui
//   return musicas.find((musica) => {
//     return musica.id === id;
//   })
// }

// console.log(findMusic('31031686'))

// const ages = [23, 32, 17, 16, 34];
// const moreAges = [23, 32, 34];

// function maior18 (array) {
//   return array.every((age) => {
//     return age >= 18;
//   });
// }

// const arrowMaior18 = (array) => array.every((age) => age > 18 );

// console.log(maior18(ages));
// console.log(maior18(moreAges));

// console.log(arrowMaior18(ages));
// console.log(arrowMaior18(moreAges));

// const musicas = [
//   //array de abojetos
//   { id: "31031685", title: "Partita in C moll BWV 997", isgood: true },
//   { id: "31031686", title: "Toccata and Fugue, BWV 565", isgood: false },
//   { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004", isgood: true },
// ];



// function primeiraMusicaBoa(musicas) {
//   return musicas.find((musica) => musica.find((dados.id === true)));
// }

// function primeiraMusicaBoa(musicas) {
//   return musicas.find((musica) => {
//       return musica.isgood === false;
//   });
// }

// console.log(primeiraMusicaBoa(musicas).title);

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
people.sort((a, b) => {
    sizeNameA = a.name.length;
    sizeNameB = b.name.length;
    return b.name.length - a.name.length;
});

  
  console.table(people);