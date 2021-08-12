// Crie uma função que calcule o ranque de um jogador em cada rodada e retorne a posição daquele jogador
// pela pontuação que ele teve no jogo.
let rank = [120, 120, 120, 110, 100, 100, 90];



function position(pontos) {

    let score = 1
    
    for (let i = 0; i < rank.length; i++) {
        
        let counter = 1

        for (let j = 0; j < rank.length; j++) {
           
            let first = rank[i]
            let secound = rank[j]
            
            if (pontos >= secound) break
            if(first > secound) {
                if (pontos > secound) break
                
                counter++
            }
        }


        if (counter > score) score = counter
    }

    return score
}


console.log("4",position(90))
console.log("3",position(100))
console.log("1",position(130))
console.log("1",position(180))

