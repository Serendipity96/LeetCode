这并不是一个分数模型，分数模型的bug如下：
```
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
var str = "LUU"
judgeCircle(str) // except：false output：true
```

正确的是建立坐标模型：
```
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
    return ( x === 0 && y === 0)
};
```

ps：字符串可以直接遍历，拿到第i个，不需要转换成数组再遍历