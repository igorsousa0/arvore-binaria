import Node from './components/tree/node';

let root = new Node(13);
root.leftChild = new Node(10);
root.rightChild = new Node(20);
root.rightChild.rightChild = new Node(34);

console.log(root);