// REDUCE

// Find bigger
// const numbers = [50, 85, -30, 3, 15, 200];

// const getBigger = (acc, number) => {
//   if (acc < number) {
//     acc = number;
//   }
//   return acc;
// };
//const getBigger = (acc, number) => ((acc > number) ? acc : number);

// const bigger = numbers.reduce(getBigger, 500);

// console.log(bigger);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumEvenArray = (acc, number) => {
//     // if (number % 2 === 0) {
//     //     return acc += number;
//     // } 
//     // return acc;
//     return number % 2 === 0 ? acc + number : acc;
// };

// const sumEven = numbers.reduce (sumEvenArray);

// console.log(sumEven);

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

const test = estudantes.map((estudante) => {
//    return {nome: estudante.nome, materia:(estudante.materias.reduce((acc, materia) => {
//         return (acc.nota > materia.nota) ? acc : materia;
//    })).name}; 
    const melhorMateria = estudante.materias.reduce((acc, materia) => {
        return (acc.nota > materia.nota) ? acc : materia;
    });
    return {nome: estudante.nome, materia: melhorMateria.name}

});

console.table(test);