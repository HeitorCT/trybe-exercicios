beforeEach(() => console.log('1º e 4º- beforeEach')); // positions where the console.log content will appear
afterEach(() => console.log('3º e 8º - afterEach')); // positions where the console.log content will appear

test('', () => console.log('2º - test')); // positions where the console.log content will appear

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('5º - beforeEach')); // positions where the console.log content will appear
  afterEach(() => console.log('7º - afterEach')); // positions where the console.log content will appear

  test('', () => console.log('6º - test')); // positions where the console.log content will appear
});