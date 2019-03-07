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

    otherAdd(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.otherAddNode(this.root, key);
        }
    }

    addNode(node, key) {
        if (key < node.key) {
            if (!node.hasLeftChild()) {
                node.leftChild = new Node(key, node);
            } else {
            this.addNode(node.leftChild, key);
            }
        } else { 
            if (!node.hasRightChild()) {
                node.rightChild = new Node(key, node);
            } else {
            this.addNode(node.rightChild, key);
            }
        }
    }
   
    otherAddNode(node, key) {
        let child = (key < node.key) ? 'leftChild' : 'rightChild'
        if (node[child] == null) {
            node[child] = new Node(key, node);
        } else {
            this.otherAddNode(node[child], key);
        }
    }

    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) return null;
        if (key < node.key) {
            return (this.searchNode(node.leftChild, key))
        }
        if (key > node.key) {
            return (this.searchNode(node.rightChild, key))
        }
        return node;
    }

    preOrder(operation) {
        this.preOrderNode(this.root, operation)
    }

    preOrderNode(node, operation) {
        if (node !== null) {
            operation(node)
            this.preOrderNode(node.leftChild, operation)
            this.preOrderNode(node.rightChild, operation)
        }
    }

    posOrder(operation) {
        this.posOrderNode(this.root, operation)
    }

    posOrderNode(node, operation) {
        if (node !== null) {
            this.preOrderNode(node.leftChild, operation)
            this.preOrderNode(node.rightChild, operation)
            operation(node)
        }
    }

    inOrder(operation) {
        this.inOrderNode(this.root, operation)
    }

    inOrderNode(node, operation) {
        if (node !== null) {
            this.preOrderNode(node.leftChild, operation)
            operation(node)
            this.preOrderNode(node.rightChild, operation)
        }
    }

    breadthSearchfirst(operation) {
        this.breadthSearchfirstNode(this.root, operation)
    }

    breadthSearchfirstNode(node, operation) {
        let queue = []
        queue.push(node)

        while (queue.length > 0) {
            let next = queue.shift()
            operation(next)
            if (next.hasLeftChild())
                queue.push(next.leftChild)
            if (next.hasRightChild())
                queue.push(next.rightChild)
        }
    }
}
