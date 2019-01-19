function LinkedList() {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    var head = null;
    var length = 0;

    this.append = function (element) {
        var node = new ListNode(element), current;

        if (head === null) {
            head = node;

        } else {
            current = head;

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


}

var list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(4);
console.log(list1.size())
var list2 = new LinkedList();
list2.append(1);
list2.append(3);
list2.append(4);
console.log(list2.size())


var mergeTwoLists = function(l1, l2) {
    let l2Cur = l2
    let pre = l1
    while(l1 !== null || l2 !== null){
        if(l1.val <= l2.val){
            l2 = l2.next
            l2Cur = l1.next
            pre = l1
            l1.next = l2Cur
            l1 = l1.next.next
            pre = l1.next
            l2Cur = l2
        }else if (l1.val > l2.val){
            l2 = l2.next
            l2Cur.next = l1
            pre.next = l2Cur
            l2Cur = l2
        }
    }
};

mergeTwoLists(list1,list2)