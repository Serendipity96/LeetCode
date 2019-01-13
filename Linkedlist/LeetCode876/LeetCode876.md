## 题解

把每一个节点存到数组里，利用数组有长度的特性，直接找到中间的节点，时间复杂度O(n)，空间复杂度O(n)。
```
var middleNode = function(head) {
    var arr = []
        var current = head
        while (current.next !== null) {
            arr.push(current)
            current = current.next
        }
        arr.push(current)
        var len = parseInt(arr.length / 2)
        return arr[len]
};
```
看到讨论区有一个双指针的思路，被惊艳到了，时间复杂度O(n)，空间复杂度O(1)。回忆起来双指针在刷题的时候经常看到，是一个巧劲，记录下来。
```
  let slow = head;
    let fast= head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
```

这两个方法消耗时间都是68ms，讨论区有些方法是0ms，我想这个时间消耗应该是JavaScript语言特性的原因。