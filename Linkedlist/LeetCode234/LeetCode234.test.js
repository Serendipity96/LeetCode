function LinkedList() {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    this.head = null;
    var length = 0;

    this.append = function (element) {
        var node = new ListNode(element), current;
        if (this.head === null) {
            this.head = node;

        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        length++;
    };

    this.size = function () {
        return length;
    };

    this.isPalindrome = function (head) {
        // 找到中间点
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        // 翻转后半部分
        let p = null
        let q = null
        while (slow !== null) {
            q = slow.next
            slow.next = p
            p = slow
            slow = q
        }
        // p中保留的就是向前遍历的头结点
        // 比较
        while ( p!== null) {
            if (head.val === p.val){
                head = head.next
                p = p.next
            } else {
                return false
            }
        }
        return true
    };
}


var list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(2);
list1.append(8);
list1.append(2);
list1.append(1);
console.log(list1.isPalindrome(list1.head))


this.isPalindrome = function (head) {
    // 找到中间点
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // 翻转后半部分
    let p = null
    let q = null
    while (slow !== null) {
        q = slow.next
        slow.next = p
        p = slow
        slow = q
    }
    // p中保留的就是向前遍历的头结点
    // 比较
    while ( p!== null) {
        if (head.val === p.val){
            head = head.next
            p = p.next
        } else {
            return false
        }
    }
    return true
};
