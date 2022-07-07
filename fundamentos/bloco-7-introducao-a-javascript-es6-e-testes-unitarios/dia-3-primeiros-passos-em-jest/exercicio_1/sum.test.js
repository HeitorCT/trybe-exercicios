// const sum = require("./sum.js");

// describe("tests the function that sum two values", () => {
//   describe("simple sum", () => {
//     test("sum 4 and 5 expect 9", () => {
//       expect(sum(4, 5)).toEqual(9);
//     });

//     test("sum 0 and 0 expect 0", () => {
//       expect(sum(0, 0)).toEqual(0);
//     });
//   });
  
//   describe("test incorrect parameter", () => {
//     test('sum 4 and "5" expect Error', () => {
//       expect(() => { sum(4, "5"); }).toThrow();
//     });

//     test('sum 4 and "5" expect Error: parameters must be numbers', () => {
//       expect(() => { sum(4, "5"); }).toThrowError(new Error("parameters must be numbers"));
//     });
//   });
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(16);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });
