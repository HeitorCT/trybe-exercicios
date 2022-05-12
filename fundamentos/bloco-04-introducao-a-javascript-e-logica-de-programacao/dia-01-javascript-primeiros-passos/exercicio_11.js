const salarioBruto = 50000.00;
let salarioLiquido = 3000.00;
let descontoInss;
let descontoIr;


if (salarioBruto <= 1555.94)
    descontoInss = salarioBruto * 0.08;
else if (salarioBruto <= 2594.92)
    descontoInss = salarioBruto * 0.09;
else if (salarioBruto <= 5189.82)
    descontoInss = salarioBruto * 0.11;
else 
    descontoInss = 570.88;


    if (salarioLiquido <= 1903.98)
    descontoIr = 0;
else if (salarioLiquido <= 2826.65)
    descontoIr = (salarioLiquido * 0.075) - 142.80;
else if (salarioLiquido <= 3751.05)
    descontoIr = (salarioLiquido * 0.15) - 354.80;
else if (salarioLiquido <= 4664.68)
    descontoIr = (salarioLiquido * 0.225) - 636.13;
else
    descontoIr = (salarioLiquido * 0.275) - 896,36;

salarioLiquido = salarioLiquido - descontoIr;

console.log ("Ganhando R$ "+salarioBruto+" meu salario liquido é R$ "+salarioLiquido);

