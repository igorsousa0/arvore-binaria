import Graph from './components/graph.list/Graph'

//         v3
//      /  |  \
//   v4    |    v2
//    \  \ |  /  |
//     \   v5    |
//      \  /     /
//       v0 - - v1
let graph = new Graph()

//vertexes
let v0 = graph.addVertex("v0")
let v1 = graph.addVertex("v1")
let v2 = graph.addVertex("v2")
let v3 = graph.addVertex("v3")
let v4 = graph.addVertex("v4")
let v5 = graph.addVertex("v5")

//edges
let e1 = graph.addEdge(v0, v1)
let e2 = graph.addEdge(v1, v2)
let e3 = graph.addEdge(v2, v3)
let e4 = graph.addEdge(v3, v4)
let e5 = graph.addEdge(v4, v0)
let e6 = graph.addEdge(v0, v5)
let e7 = graph.addEdge(v2, v5)
let e8 = graph.addEdge(v3, v5)
let e9 = graph.addEdge(v4, v5)

graph.adjacencyList()