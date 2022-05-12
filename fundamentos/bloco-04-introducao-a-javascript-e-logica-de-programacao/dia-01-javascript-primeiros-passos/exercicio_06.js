let chessPiece = "RainhA";
chessPiece = chessPiece.toLowerCase();

switch (chessPiece){
    case "peao":
        console.log ("Peao -> para frente");
    break
    case "cavalo":
        console.log ("Cavalo -> em L");
    break
    case "bispo":
        console.log ("Bispo -> nas diagonais");
    break
    case "torre":
        console.log ("Torre -> linha reta nas colunas e fileiras");
    break
    case "rainha":
        console.log ("Rainha -> todas as direções");
    break
    case "rei":
        console.log ("Rei -> todas as direções");
    break
    default:
        console.log ("Erro, peça não localizada");
}


