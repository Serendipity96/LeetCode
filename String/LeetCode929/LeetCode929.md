## 题解

这道题目考察对 JavaScript API 的熟练度，采用不同 API 效率不相同，以下三种解法是逐步优化的过程，leetcode上三种方法的耗时96ms → 92ms → 76ms。
看了64ms的题解，感叹一句：要对 API 熟练啊，了解性能啊。

注意：对所使用的 API 是否有返回值，是什么的类型的返回值要清楚。

#### 方法一

主要API：split（），join（）

```
var numUniqueEmails = function (emails) {
    let map = new Map()
    for (let i = 0; i < emails.length; i++) {
        let splitEmail = emails[i].split("@")// [test.email+aaa,leetcode.com] 这样的数组
        let localName = splitEmail[0].split("+")// [test.email,aaa] 这样的数组
        // 去除"."
        let a = localName[0].split(".")
        let b = a.join("")
        splitEmail[0] = b
        map.set(splitEmail.join(""), 0)
    }
    return map.size
};
```

#### 方法二

主要API： split（），replace（）

```
var numUniqueEmails = function (emails) {
    let map = new Map()
    for (let i = 0; i < emails.length; i++) {
        let splitEmail = emails[i].split("@")// [test.email+11111,leetcode.com]
        let localName = splitEmail[0].split("+")// [test.email,11111]

        // 正则
        let reg = /\./g
        let a = localName[0].replace(reg, "")
        splitEmail[0] = a
        map.set(splitEmail.join(""), 0)
    }
    return map.size
};
```

#### 方法三

保持emails数组中每个字符串不变，设置“@”开关和“+”开关。
主要API：charAt（），slice（）

```
var numUniqueEmails = function (emails) {
    let map = new Map()
    for (let i = 0; i < emails.length; i++) {
        let result = ""
        let switchAt = false
        let switchPlus = false
        for (let j = 0; j < emails[i].length; j++) {
            let char = emails[i].charAt(j)
            if (!switchAt) {
                if (char === '+') {
                    switchPlus = true
                    continue
                }
                if (char === '@') {
                    result += emails[i].slice(j)
                    break
                }
                if (switchPlus || char === '.') {
                    continue
                }
            }
            result += char
        }
        map.set(result, 0)
    }
    return map.size
};
```