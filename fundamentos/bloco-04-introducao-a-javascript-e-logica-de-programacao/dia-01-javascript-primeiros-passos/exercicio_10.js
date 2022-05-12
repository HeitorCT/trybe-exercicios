const custoProduto = 34;
const valorVenal = 56;
const imposto = 0.2;
let valorCustoTotal;
let lucro;


if (custoProduto < 0 || valorVenal < 0 )
    console.log ("Erro, valores incorretos")
else{
    valorCustoTotal = custoProduto + (custoProduto*imposto);
    lucro = valorVenal - valorCustoTotal;
    console.log (lucro);
    console.log ("O lucro de 1000 prdutos é igual a:"+(lucro*1000));
} 

