import Node from './node';

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.addNode(this.root, key);
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            if (node.leftChild == null) {
                node.leftChild = new Node(key);
                node.leftChild.parent = node;
            } else {
            this.addNode(node.leftChild, key);
            }
        } else { 
            if (node.rightChild == null) {
                node.rightChild = new Node(key);
                node.rightChild.parent = node;
            } else {
            this.addNode(node.rightChild, key);
            }
        }
    }
}
