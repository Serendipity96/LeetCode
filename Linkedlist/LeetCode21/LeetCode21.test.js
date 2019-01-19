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


var mergeTwoLists = function (l1, l2) {
    let lr = null;
    let head = null
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            if(lr === null){
                lr = l1
                head = lr
            }else{
                lr.next = l1
            }
            l1 = l1.next
            lr =lr.next
        }
        if(l2.val < l1.val){
            if(lr === null){
                lr = l2
                head = lr
            }else{
                lr.next = l2
            }
            l2 = l2.next
            lr =lr.next
        }

        if(l1.val === l2.val){
            if(lr === null){
                lr = l1
                head = lr
                lr.next = l2
                lr = lr.next
            }else{
                lr.next = l1
                lr = lr.next
                lr.next = l2
                lr = lr.next
            }

            l1 = l1.next
            l2 = l2.next
        }
    }
    if(l1 == null){
        lr.next = l2
    }
    if(l2 == null){
        lr.next = l1
    }
    return head
};

mergeTwoLists(list1, list2)