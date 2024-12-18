
let calculoRanking = saldoVitorias(151, 30);

let mostraVitorias = nivelHeroi(calculoRanking);
console.log("O Heroi tem saldo de **" + calculoRanking + "** e está no nível de **" + mostraVitorias + "**");

function saldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo;
}
function nivelHeroi(calculoRanking){
    let ranking = " ";    
        if (calculoRanking <= 10){
            ranking = "Ferro"
        } else if ((calculoRanking >= 11) && (calculoRanking <= 20)){
            ranking = "Bronze";
        } else if ((calculoRanking >= 21) && (calculoRanking <= 50)){
            ranking = "Prata";
        } else if ((calculoRanking >= 51) && (calculoRanking <= 80)){
            ranking = "Ouro";
        } else if ((calculoRanking >= 81) && (calculoRanking <= 90)){
            ranking = "Diamante";
        } else if ((calculoRanking >= 91) && (calculoRanking <= 100)){
            ranking = "Lendário";
        } else {
            ranking = "Imortal";
        }       
    return ranking;    
}