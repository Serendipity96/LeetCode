/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let arr = moves.split("")
    let score = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "U"){
            score+=1
        }else if(arr[i] === "D"){
            score-=1
        }else if(arr[i] === "L"){
            score-=2
        }else {
            score+=2
        }
    }
    if(score === 0){
        return true
    }else {
        return false
    }
};

var str = "RRDD"
judgeCircle(str)