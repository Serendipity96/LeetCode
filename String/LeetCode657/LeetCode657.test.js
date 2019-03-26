/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0
    let y = 0
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            y++
        } else if (moves[i] === "D") {
            y--
        } else if (moves[i] === "L") {
            x--
        } else {
            x++
        }
    }
    return (x === 0 && y === 0)
};

var str = "RRDD"
judgeCircle(str)


