import Tree from '../components/tree/binarySearchTree';

let keys = [50, 10, 60, 55, 87, 199, 9, 48, 47];

let tree = new Tree();

keys.forEach(key => tree.anotherAdd(key));
