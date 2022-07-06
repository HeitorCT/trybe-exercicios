// SPREED OPERATOR - sintaxe de propagação

const horrorBooks = ["Chutulu", "Saw"];
const scifiBooks = ["StarWars", "Pandora", "Avatar"];

let superBooks = [];

// horrorBooks.forEach((book) => superBooks.push(book));

// scifiBooks.forEach((book) => superBooks.push(book));

superBooks = [...horrorBooks, ...scifiBooks];

console.log(superBooks);

// --------

const ponto = [1.5, 25.8, 12];
const outroPonto = [1.9, 9.5, 5.5];

let coordenadas = [];

// horrorBooks.forEach((book) => superBooks.push(book));

// scifiBooks.forEach((book) => superBooks.push(book));

const corrdendasTexto = (x, y, z) => `x = ${x} | y = ${y} | z = ${z}`;
coordenadas = [...horrorBooks, ...scifiBooks];

// console.log(corrdendasTexto(ponto[0],ponto[1],ponto[2]));
// console.log(corrdendasTexto(...horrorBooks));

// REST (coloca no array) contrário do spreed (tira do array)
// arrray
const sumAll = (...operands) => operands.reduce((a, b) => a + b, 0);

// console.log(sumAll(1,2,3,4,5));

// -----

const data = (year, month, day, ...rest) =>
  `y = ${year} | m = ${month} | d = ${day} | rest = ${rest.join(":")}`;

const dataInfo = ["1981", "7", "31", "22", "47", "12"];

// console.log(data('1981', '7', '31', '22', '47', '12'));
// console.log(data(...dataInfo)); // Spreed

// ---------- Desestructuring - DEsestruturação

const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: 59 },
      { name: "Português", nota: 80 },
      { name: "Química", nota: 78 },
      { name: "Biologia", nota: 92 },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 76 },
      { name: "Português", nota: 90 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 80 },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 91 },
      { name: "Português", nota: 85 },
      { name: "Química", nota: 92 },
      { name: "Biologia", nota: 90 },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 70 },
      { name: "Português", nota: 70 },
      { name: "Química", nota: 60 },
      { name: "Biologia", nota: 50 },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 80 },
      { name: "Português", nota: 82 },
      { name: "Química", nota: 79 },
      { name: "Biologia", nota: 75 },
    ],
  },
];

const myObj = {
  nome: "Wilson",
  sobrenome: "Martins",
  idade: 14,
  turno: "Manhã",
  materias: [
    { name: "Matemática", nota: 80 },
    { name: "Português", nota: 82 },
    { name: "Química", nota: 79 },
    { name: "Biologia", nota: 75 },
  ],
};

const { materias } = myObj;

console.log(materias);

const [estudante1, estudante2] = estudantes;

console.log(estudante1);
