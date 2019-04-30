import Tree from '../components/tree/binarySearchTree'
import { printIndentedKey } from '../components/tree/util/transversalOperations'

let keys = [50, 10, 60, 55, 87, 199, 9, 48, 47]

let tree = new Tree()

keys.forEach(key => tree.anotherAdd(key))

tree.preOrder(printIndentedKey)
let minimum = tree.minimum()
let maximum = tree.maximum()

console.log(`min: ${minimum.key}, max: ${maximum.key}`)