const uppercase = require('./Exercicio_7');

describe('Test function Uppercase', () => {
  test('test "is simply dummy text"', (done) => {
    const phrase = 'is simply dummy text';
    uppercase(phrase, (str) => {
      try {
        expect(str).toEqual('IS SIMPLY DUMMY TEXT');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
