import Node from './node'

export default class BinarySearchTree {
    constructor() {
        this.root = null
    }

    add(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.addNode(this.root, key)
        }
    }

    addNode(node, key) {
        if (key <= node.key) {
            if (!node.hasLeftChild()) {
                node.leftChild = new Node(key, node)
            } else {
                this.addNode(node.leftChild, key)
            }
        } else {
            if (!node.hasRightChild()) {
                node.rightChild = new Node(key, node)
            } else {
                this.addNode(node.rightChild, key)
            }
        }
    }

    anotherAdd(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.anotherAddNode(this.root, key)
        }
    }

    anotherAddNode(node, key) {
        let child = (key <= node.key) ? 'leftChild' : 'rightChild'
        if (node[child] == null) {
            node[child] = new Node(key, node)
        } else {
            this.anotherAddNode(node[child], key)
        }
    }

    search(key) {
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
        if (node == null) return null

        if (key < node.key)
            return this.searchNode(node.leftChild, key)

        if (key > node.key)
            return this.searchNode(node.rightChild, key)

        return node
    }

    preOrder(operation) {
        this.preOrderNode(this.root, operation)
    }

    preOrderNode(node, operation) {
        if (node != null) {
            operation(node)
            this.preOrderNode(node.leftChild, operation)
            this.preOrderNode(node.rightChild, operation)
        }
    }

    breadthFirstSearch(operation) {
        this.breadthFirstSearchNode(this.root, operation)
    }

    breadthFirstSearchNode(node, operation) {
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

    minimum() {
        return this.minimumNode(this.root)
    }

    minimumNode(node) {
        let minimum = node

        if (minimum) {
            while (minimum.hasLeftChild()) {
                minimum = minimum.leftChild
            }
        }

        return minimum
    }

    maximum() {
        return this.maximumNode(this.root)
    }

    maximumNode(node) {
        let maximum = node

        if (maximum) {
            while (maximum.hasRightChild()) {
                maximum = maximum.rightChild
            }
        }
        return maximum
    }

    remove(key) {
        let found = this.search(key)

        if (found) {
            if (found.isLeaf()) {
                if (found.isRoot()) {
                    this.root = null
                } else {
                    if (found.isLeftChild()) {
                        found.parent.leftChild = null
                    } else {
                        found.parent.rightChild = null
                    }
                    found.parent = null
                }
            } else if (found.hasBothChildren()) {
                let substitute = this.minimumNode(found.rightChild);
                this.remove(substitute.key)
                found.key = substitute.key
            } else {
                if (found.isRoot()) {
                    if (found.hasLeftChild()) {
                        found.leftChild.parent = null
                        this.root = found.leftChild
                    } else {
                        found.rightChild.parent = null
                        this.root = found.rightChild
                    }
                } else {
                    if (found.isLeftChild()) {
                        if (found.hasLeftChild()) {
                            found.parent.leftChild = found.leftChild
                            found.leftChild.parent = found.parent
                            found.leftChild = null
                        } else {
                            found.parent.leftChild = found.rightChild
                            found.rightChild.parent = found.parent
                            found.rightChild = null
                        }
                    } else {
                        if (found.hasLeftChild()) {
                            found.parent.rightChild = found.leftChild
                            found.leftChild.parent = found.parent
                            found.leftChild = null
                        } else {
                            found.parent.rightChild = found.rightChild
                            found.rightChild.parent = found.parent
                            found.rightChild = null
                        }
                    }
                    found.parent = null
                }
            }
        }

        return found
    }

    sum() {
        return this.sumNodes(this.root)
    }

    sumNodes(node) {
        let sum = 0;
        if (node != null) {
            sum += node.key
            sum += this.sumNodes(node.leftChild);
            sum += this.sumNodes(node.rightChild)
        }

        return sum;
    }
}