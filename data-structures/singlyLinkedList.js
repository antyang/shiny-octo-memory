var LinkedList = function() {
	this.head = null;
}

LinkedList.prototype.insert = function(val) {
	var node = {
        data: val,
        next:null,
    };

    if (!this.head) {
        this.head = node;
    } else {
        var current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

var sll = new LinkedList();

sll.insert(1)
sll.insert(2)
sll.insert(3)
sll.insert(4)
sll.insert(5)
sll.insert(6)
sll.insert(7)
sll.insert(8)
sll.insert(9)

console.log(JSON.stringify(sll, null, 2))