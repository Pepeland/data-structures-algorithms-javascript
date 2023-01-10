class Node {
    value = null;
    leftChild = null;
    rightChild = null;

    constructor(value) {
        this.value = value;
    }
}

class BinaryTree {
    root;
    order = [];

    insert(value) {
        const node = new Node(value);

        if (this.root == null) {
            this.root = node;
            return;
        }
        if (this.find(value))
            return;

        let current = this.root;
        while (true) {
            if (value > current.value) {
                if (current.rightChild == null) {
                    current.rightChild = node;
                    return;
                }
                current = current.rightChild;
            } else {
                if (current.leftChild == null) {
                    current.leftChild = node;
                    return;
                }
                current = current.leftChild;
            }
        }
    }

    find(value) {
        let current = this.root;
        while (current != null) {
            if (value > current.value)
                current = current.rightChild;
            else if (value < current.value)
                current = current.leftChild;
            else return true;
        }
        return false;
    }

    traversePreOrder(node) {
        if(!node)
            return;
        this.order.push(node.value);
        this.traversePreOrder(node.leftChild);
        this.traversePreOrder(node.rightChild);
    }

    traverseInOrder(node) {
        if(!node)
            return;
        this.traverseInOrder(node.leftChild);
        this.order.push(node.value);
        this.traverseInOrder(node.rightChild);
    }

    traversePostOrder(node) {
        if(!node)
            return;
        this.traversePostOrder(node.leftChild);
        this.traversePostOrder(node.rightChild);
        this.order.push(node.value);
    }

}

let binaryTree = new BinaryTree();
binaryTree.insert(7);
binaryTree.insert(4);
binaryTree.insert(9);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(10);
// console.log(binaryTree.find(11));

binaryTree.order = [];
binaryTree.traversePreOrder(binaryTree.root);
console.log(binaryTree.order);

binaryTree.order = [];
binaryTree.traverseInOrder(binaryTree.root);
console.log(binaryTree.order);

binaryTree.order = [];
binaryTree.traversePostOrder(binaryTree.root);
console.log(binaryTree.order);

