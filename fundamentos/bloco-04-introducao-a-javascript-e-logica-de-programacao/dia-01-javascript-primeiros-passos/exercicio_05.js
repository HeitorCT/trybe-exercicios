const anguloA = 60;
const anguloB = 70;
const anguloC = 50;


if (anguloA < 0 || anguloB < 0 || anguloC < 0)
    console.log("Erro! Angulo negativo indentificado");    
else
    if ((anguloA + anguloB + anguloC) == 180)
        console.log("true - são angulos de um triângulo");
    else
        console.log("false - não são angulos de um triângulo");
