// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// setTimeout(() => console.log(numbers), 3010);

// const gastos = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const salario = 1000;

// const despesaMensal = (salario, gastos, callback) => {
//   const despesaTotal = callback(gastos);
//   const saldoFinal = salario - despesaTotal;

//   console.log(`Balanço do mês:
//       Recebido: R$${salario},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
// };

// const somagastos = (gastos) => {
//   const custoItem = gastos.map((item) => Object.values(item));
//   const despesaTotal = custoItem.reduce((acc, curr) => (acc += curr[0]), 0);
//   return despesaTotal;
// };

// despesaMensal(salario, gastos, somagastos);


// const userFullName = ({ firstName }) => `Hello! My name is ${firstName}`;


// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   console.log(param(userToReturn));
//   return param(userToReturn);
// };


// getUser(userFullName);

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName)); 
// console.log(getUser(userNationality));

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (callback) => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };    
//     console.log(callback(user));
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, offSuccess) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = "Country could not be found";
//       offSuccess(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// getCountry(countryCurrency, printErrorMessage);


// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };

// // test('Testa a função addCity', () => {
// //   expect.assertions(4);
// //   addCity('Campinas');
// //   addCity('Goiania');
// //   addCity('Recife');
// //   expect(cities).toHaveLength(3);
// //   expect(cities).toContain('Campinas');
// //   expect(cities).toContain('Goiania');
// //   expect(cities).toContain('Recife');
// // });

// // test('Testa a função removeCity', () => {
// //   expect.assertions(4);
// //   removeCity('Campinas');
// //   expect(cities).toHaveLength(2);
// //   expect(cities).not.toContain('Campinas');
// //   expect(cities).toContain('Goiania');
// //   expect(cities).toContain('Recife');
// // });

// describe('Agrupa o primeiro bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Pindamonhangaba'];
//   });
  
//   afterEach(() => {
//     cities = [];
//   });
  
//   test('Testa a função addCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(3);
//     addCity('Piraporinha');
//     expect(cities).toHaveLength(2);
//     expect(cities).toContain('Pindamonhangaba');
//     expect(cities).toContain('Piraporinha');
//   });
  
//   test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Pindamonhangaba');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });

// describe('Agrupa o segundo bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Tangamandapio'];
//   });
  
//   afterEach(() => {
//     cities = [];
//   });
  
//   test('Testa a função addCity dentro do segundo bloco de testes', () => {
//     expect.assertions(3);
//     expect(cities).toHaveLength(1);
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toContain('Tangamandapio');
//   });
  
//   test('Testa a função removeCity dentro do segundo bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Tangamandapio');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });

