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

    this.hasCycle = function (head) {
        if(head == null){
            return false
        }
        let slow = head
        let fast = head
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
        return false
    }
}

var list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);
list2.append(6);
console.log(list2.size())
list2.hasCycle(list2.head)