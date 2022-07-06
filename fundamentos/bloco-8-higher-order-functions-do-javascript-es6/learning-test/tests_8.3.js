// .filter();

// const arr = ['Nome123', 'Nome1234', 'Nome12345'];

// const filtered = arr.filter((element) => {
//     return element.length > 7;
// });

// console.log(filtered);

// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByEndLetter = (letter, listStudents) =>
// //   listStudents.filter((student) => student[student.length-1] !== letter);
// //   // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// // const newListStudents = removeStudentByEndLetter('a', arrayMyStudents);
// // console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// // const pessoas = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// // const newPessoas = pessoas.map((element) => {
// //     return {
// //         nome: element,
// //         localDeTrabalho: 'trybe',
// //     };
// // });

// // console.table(newPessoas);

// // const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// // const convertToUpperCase = (name, index) => {
// //   let obj = {
// //             nome: name,
// //             localDeTrabalho: 'trybe',
// //             };
// //     name[index] = obj;
// // };

// // names.forEach(convertToUpperCase);
// // console.log(names);

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// // const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// // const prices = [2.99, 3.99, 1.5, 2];

// // const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
// //     { [product]: listPrices[index] }
// //   ));

// // const listProducts = updateProducts(products, prices);

// // console.table(listProducts);

// const listProducts = products.map((element, index) => {
//     return {[element]: prices[index]};
// });

// console.table(listProducts);

// const musicas = [
//   { id: "31031685", title: "Partita in C moll BWV 997" },
//   { id: "31031686", title: "Toccata and Fugue, BWV 565" },
//   { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
// ];

// musicas.filter((element) => {
//     element.isDriver === false})
// .map((element) => {
//     return `${element.nome}  ${element.sobrenome}`;
// });

// console.table(filtered);

// const teste = { includeNames: true, sorted: true};

// const { includeNames, sex, sorted } = teste;

// let test;

// console.table(test === undefined);
// console.table('sex:' +sex);
// console.table('sorted:' +sorted);

const objPeople = [
  { name: "José", age: 21 },
  { name: "Lucas", age: 19 },
  { name: "Maria", age: 16 },
  { name: "Gilberto", age: 18 },
  { name: "Vitor", age: 15 },
];

const func = (acc, curr) => {
  if (curr.age > 16) {
    acc.push(curr);
  }
  return acc;
};

const verifyAgeDrive = objPeople.reduce(func, []);

console.table(verifyAgeDrive);
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
