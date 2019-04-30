import Tree from '../components/tree/binarySearchTree'
import { printIndentedKey } from '../components/tree/util/transversalOperations'

let keys = [50, 40, 60, 30, 45, 55, 70]

let tree = new Tree()

keys.forEach(key => tree.anotherAdd(key))

let sum = tree.sum()

console.log(`sum: ${sum}`)