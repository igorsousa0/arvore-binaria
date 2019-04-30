import Tree from '../components/tree/binarySearchTree';

let keys = [13, 10, 20, 40, 21, 8, 9];

let tree = new Tree();

keys.forEach(key => tree.anotherAdd(key));

let found1 = tree.search(9);
let found2 = tree.search(13);
let found3 = tree.search(31);

console.log(found1)
console.log(found2)
console.log(found3)