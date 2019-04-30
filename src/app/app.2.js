import Tree from '../components/tree/binarySearchTree';

let keys = [13, 10, 20, 40, 21, 8, 9];

let tree = new Tree();

keys.forEach(key => tree.add(key));

console.log(tree);