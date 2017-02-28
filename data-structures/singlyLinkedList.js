var LinkedList = function() {
	this.head = null;
}

LinkedList.prototype.insertAfter = function(val) {
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

sll.insertAfter(1);
sll.insertAfter(2);
sll.insertAfter(3);
sll.insertAfter(4);
sll.insertAfter(5);
sll.insertAfter(6);
sll.insertAfter(7);
sll.insertAfter(8);
sll.insertAfter(9);
console.log(JSON.stringify(sll, null, 2));