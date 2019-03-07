export default class Node {
    constructor(key, parent=null) {
        this.key = key;
        this.parent = parent;
        this.leftChild = null;
        this.rightChild = null;
    }

    isLeaf() {
        return (this.leftChild == null && this.rightChild == null)
    }

    hasBothChildren() {
        return (this.leftChild !== null && this.rightChild !== null)
    }

    isLeftChild() {
        return this.parent > this.key
    }

    isRightChild() {
        return this.parent < this.key
    }
    
    hasLeftChild() {
        return this.leftChild !== null
    }

    hasRightChild() {
        return this.rightChild !== null
    }

    isRoot() {
        return this.parent == null
    }

    depth() {
        if(this.isRoot()) return 0
        return 1 + this.parent.depth()
    }
}
