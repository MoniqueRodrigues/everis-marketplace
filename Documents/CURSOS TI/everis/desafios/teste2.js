// Crie uma função que calcule o ranque de um jogador em cada rodada e retorne a posição daquele jogador
// pela pontuação que ele teve no jogo.

let rank = [120, 120, 120, 110, 100, 100, 90];

function calculaPosicao(score) {
    let newRank = new Set(rank); //limpar um array removendo os valores repetidos.
    let posicao = 1;

    for (let item of newRank.values()) { 
        // console.log(item)
        if (score < item) {
            posicao++;
           
        }
       
    }
    
    return posicao;
}
console.log("4",calculaPosicao(90))
console.log("3",calculaPosicao(100))
console.log("1",calculaPosicao(130))
