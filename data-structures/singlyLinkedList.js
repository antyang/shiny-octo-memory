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
};

LinkedList.prototype.deleteNode = function(val) {
	if(!this.head) {
		console.log('List is empty');
		return;
	}

	if(this.head.data === val) {
		this.head = this.head.next;
	} else {
		var current = this.head;
		var p = current.next;
		while (p) {
			if(p.data === val) {
				current.next = p.next;
				break;
			} else {
				current = p;
			}
			p = p.next;
		}
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

sll.deleteNode(1);
sll.deleteNode(9);
console.log(JSON.stringify(sll, null, 2));



