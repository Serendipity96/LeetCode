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
}

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.size())
console.log(list.middleNode())


