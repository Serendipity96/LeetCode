/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let map = new Map()


    for (let i = 0; i < emails.length; i++) {
        let splitEmail = emails[i].split("@")// [test.email+11111,leetcode.com]
        let localName = splitEmail[0].split("+")// [test.email,11111]

        // // 正则
        // let reg = /\./g
        // let a = localName[0].replace(reg, "")
        // splitEmail[0] = a

        //数组方法
        let a = localName[0].split(".")
        let b = a.join("")
        splitEmail[0] = b
        map.set(splitEmail.join(""), "")
    }

    // for (let i = 0; i < emails.length; i++) {
    //     let result = ""
    //     let switchAt = false
    //     let switchPlus = false
    //     for (let j = 0; j < emails[i].length; j++) {
    //         let char = emails[i].charAt(j)
    //         if (!switchAt) {
    //             if (char === '+') {
    //                 switchPlus = true
    //                 continue
    //             }
    //             if (char === '@') {
    //                 result += emails[i].slice(j)
    //                 break
    //             }
    //             if (switchPlus || char === '.') {
    //                 continue
    //             }
    //         }
    //         result += char
    //     }
    //     map.set(result, 0)
    // }
    return map.size
};

let emails = ["test.email11111@leetcode.com", "test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]

numUniqueEmails(emails)