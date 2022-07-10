const uppercase = require("./Exercicio_7");

describle("Test function Uppercase", () => {
  test('test "is simply dummy text of the printing and typesetting industry"', () => {
    let phase = "is simply dummy text";
    expect(uppercase(phase)).toEqual("IS SIMPLY DUMMY TEXT");
  });
});
