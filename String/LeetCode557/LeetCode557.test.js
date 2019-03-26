/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ")
    // let strArr = new Array(arr.length * 2 - 1)

    let strArr = []
    console.log(strArr)
    for (let i = 0; i < arr.length; i++) {
        let oldStr = arr[i]
        let newStr = ""
        for (let j = oldStr.length - 1; j >= 0; j--) {
            newStr += oldStr[j]
        }
        strArr.push(newStr)
        // strArr[2 * i] = newStr
        if (i !== arr.length - 1) {
            // strArr[2 * i + 1] = " "
            strArr.push(" ")
        }
    }
    let str = ""
    console.log(strArr)
    console.log(strArr.length)
    for (let i = 0; i < strArr.length; i++) {
        str += strArr[i]
    }
    console.log(str)
    return str
};
reverseWords("Let's take LeetCode contest")