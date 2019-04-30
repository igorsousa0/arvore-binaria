export default class Node {
    constructor(key, parent = null) {
        this.key = key
        this.leftChild = null
        this.rightChild = null
        this.parent = parent
    }

    isRoot() {
        return this.parent == null
    }

    depth() {
        if (this.isRoot()) {
            return 0
        } 
        return 1 + this.parent.depth()
    }

    hasLeftChild() {
        return this.leftChild !== null
    }

    hasRightChild() {
        return this.rightChild !== null
    }

    isLeaf() {
        return !this.leftChild && !this.rightChild
    }

    isLeftChild() {
        return this.parent.leftChild === this
    }

    isRightChild() {
        return this.parent.rightChild === this
    }

    hasBothChildren() {
        return this.leftChild && this.rightChild
    }

    height() {
        if (this.isLeaf()) {
            return 0;
        } else {
            if (this.hasBothChildren()) {
                return Math.max(this.leftChild.height(), 
                                this.rightChild.height()) + 1
            } else if (this.hasLeftChild()) {
                return this.leftChild.height() + 1
            } else {
                return this.rightChild.height() + 1
            }
        }
    }
}