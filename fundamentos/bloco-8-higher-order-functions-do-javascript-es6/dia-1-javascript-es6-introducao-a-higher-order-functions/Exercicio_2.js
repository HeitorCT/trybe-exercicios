const sorteio = (numeroEscolhido, callback) => {
    numeroSorteado = Math.floor(Math.random () * 6);
    if (callback(numeroEscolhido,numeroSorteado)) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

const checaSeAcertou = (num1, num2) => {
    if (num1 === num2) {
        return true;
    }
    return false;
}

console.log(sorteio(1,checaSeAcertou));