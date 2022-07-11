const { getPokemonDetails } = require("./Exercicio_8");

describe("A função getPokemonDetails", () => {
    
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const wantedPokemon = (pokemon) => pokemon.name === "Pikachu";    
        
    const callback = (typeError, message) => {
      expect(typeError).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    };    

    getPokemonDetails(wantedPokemon,callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const wantedPokemon = (pokemon) => pokemon.name === "Squirtle";    
    
    const callback = (typeError, message) => {
      expect(message).toEqual("Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun");
      done();
    };

    getPokemonDetails(wantedPokemon,callback);
  });
});
