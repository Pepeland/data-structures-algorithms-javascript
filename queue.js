class Queue {
    queueArray = [];

    enqueue(value) {
        this.queueArray.push(value);
    }

    dequeue() {
        return this.queueArray.splice(0, 1);
    }

    peek() {
        return this.queueArray.slice(0, 1);
    }

    isEmpty() {
        return this.queueArray.length === 0;
    }

    print() {
        console.log(this.queueArray);
    }
}


queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty())
console.log(queue.dequeue());
queue.print();
console.log(queue.isEmpty())

