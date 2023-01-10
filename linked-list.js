class Node {
    value;
    next;

    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head;
    tail;

    addLast(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    traverse() {
        let listStr = this.head.value + ',';
        let next = this.head.next;
        while (next) {
            listStr += next.value + ',';
            next = next.next;
        }
        console.log(listStr.slice(0, -1));
    }

    reverse() {
        let next = this.head;
        let next2 = next ? next.next : null;
        let next3 = next.next ? next.next.next : null;
        this.head.next = null;

        while (true) {
            if(next2) next2.next = next;

            if(!next3) break;
            next = next2;
            next2 = next3;
            next3 = next3.next;
        }

        this.head = next2;
    }

    reverseFrom(left, right) {
        let next = this.head;
        let next2 = next ? next.next : null;
        let next3 = next.next ? next.next.next : null;
        this.head.next = null;
        let newHead = null;

        while (true) {
            if(next.value < left) {
                next = next2;
                next2 = next3;
                next3 = next3.next;
                newHead = next;
                continue;
            }
            if(next2) next2.next = next;

            if(!next3 || next3.value > right) break;
            next = next2;
            next2 = next3;
            next3 = next3.next;
        }

        this.head.next = next2;
        newHead.next = next3;
    }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);

list.traverse();
//list.reverse();
//list.traverse();
list.reverseFrom(20, 40);
list.traverse();