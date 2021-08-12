// Crie uma função que calcule o ranque de um jogador em cada rodada e retorne a posição daquele jogador
// pela pontuação que ele teve no jogo.

let rank = [120, 120, 120, 110, 100, 100, 90];

function position(pontos) {

    let ranking = 1
    let score = rank[0]

    for (let i = 0; i < rank.length; i++) {

        if (pontos < score && rank[i] < score) {
            score = rank[i]  
            ranking++
        }
    }

    if (pontos < rank[rank.length - 1]) ranking++
    

    
    return ranking
}
console.log("4",position(90))
console.log("3",position(100))
console.log("1",position(130))
