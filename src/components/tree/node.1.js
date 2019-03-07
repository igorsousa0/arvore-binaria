export default class Node {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.leftChild = null;
        this.rightChild = null;
    }

    isLeaf(node) {
        return (node.leftChild == null && node.rightChild == null);
    }

    hasBothChildren(node) {
        return (node.leftChild !== null && node.rightChild !== null);
    }

    isLeftChild(node) {
        return (node.parent > node.key);
    }

    isRightChild(node) {
        return (node.parent < node.key);
    }
    
    hasLeftChild(node) {
        return (node.leftChild !== null)
    }

    hasRightChild(node) {
        return (node.rightChild !== null)
    }
}
