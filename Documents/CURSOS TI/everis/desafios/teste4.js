let rank = [120, 120, 120, 110, 100, 100, 90];
// 1-120 
// 2-110 
// 3-100 
// 4-90 


function position(pontos) {

    let newArray = []
    let score = 1
    for (let i = 0; i < rank.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            let first = rank[i]
            let second = rank[j]
            if (first !== second && !newArray.includes(first)) {
                newArray.push(first)
            }
        }
    }
    // console.log('newArray:',newArray)
    //newArray: [ 120, 110, 100, 90 ]

    for (let i = 0; i < newArray.length; i++) { //iterando o newArray
        if (pontos < newArray[i]) {
            score++;

        }

    }

    return score

}

console.log("4", position(90));
console.log("3", position(100));
console.log("1", position(130));
console.log("1", position(150));
console.log("5", position(70));