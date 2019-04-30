import Tree from '../components/tree/binarySearchTree'
import { printIndentedKey } from '../components/tree/util/transversalOperations'

let keys = [50, 40, 60, 30, 45, 55, 70]

let tree = new Tree()
keys.forEach(key => tree.anotherAdd(key))

tree.preOrder(printIndentedKey)

console.log("Removendo 50")
tree.remove(50)
tree.preOrder(printIndentedKey)

console.log("Removendo 55")
tree.remove(55)
tree.preOrder(printIndentedKey)

console.log("Removendo 60")
tree.remove(60)
tree.preOrder(printIndentedKey)

console.log("Removendo 70")
tree.remove(70)
tree.preOrder(printIndentedKey)

console.log("Removendo 40")
tree.remove(40)
tree.preOrder(printIndentedKey)

console.log("Removendo 45")
tree.remove(45)
tree.preOrder(printIndentedKey)

console.log("Removendo 30")
tree.remove(30)
tree.preOrder(printIndentedKey)