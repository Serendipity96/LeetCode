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

    this.middleNode = function () {
        var arr = []
        var current = head
        while (current.next !== null) {
            arr.push(current)
            current = current.next
        }
        arr.push(current)
        var len = parseInt(arr.length / 2)
        return arr[len]
    }
    this.reverseList = function () {
        var p = null
        var q = null
        while (head !== null) {
            q = head.next
            head.next = p
            p = head
            head = q
        }
        return p
    }
    this.deleteNode = function (node) {
        node.val = node.next.val
        node.next = node.next.next
    };

}

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(500);


