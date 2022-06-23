const corrigeProva = (gabarito, respostas, callback) => {
    soma = 0; 
    for ( let i = 0; i < gabarito.length; i += 1) {
        soma += callback(gabarito[i],respostas[i]);
    }
    return soma;
}

const verificaPontuacao = (respostaCerta, resposta) => {
    if (resposta === 'N.A'){
        return 0;
    }
    if(respostaCerta === resposta){
        return 1;
    }
    return -0.5;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corrigeProva(RIGHT_ANSWERS,STUDENT_ANSWERS,verificaPontuacao));

