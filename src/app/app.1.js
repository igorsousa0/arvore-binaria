import Node from '../components/tree/node'

let root = new Node(13)
root.rightChild = new Node(20)
root.leftChild = new Node(7)
root.rightChild.rightChild = new Node(40)

console.log(root)