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

    this.deleteDuplicates = function (head) {
        if(head == null){
            return head
        }
        let current = head.next;
        let pre = head
        while(current!==null){
            if (current.val === pre.val){
                current = current.next
                pre.next = current
            }else{
                pre = current
                current = current.next
            }
        }
        return head
    }
}



var list2 = new LinkedList();
list2.append(1);
list2.append(1);
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(3);
console.log(list2.size())
list2.deleteDuplicates(list2.head)