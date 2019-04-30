import Vertex from "./Vertex";
import Edge from "./Edge";

export default class Graph {
    constructor() {
        this._vertexes = []
    }

    addVertex(element) {
        //TODO: nao permitir inserir vertices ja existentes
        let vertex = new Vertex(element)
        this._vertexes.push(vertex)
        return vertex
    }

    addEdge(origin, destination, element = null) {
        let edge = new Edge(origin, destination, element)

        origin.addEdge(edge)
        destination.addEdge(edge)
    }

    adjacencyList() {
        this._vertexes.forEach( vertex => console.log(vertex.adjacencyList()) )
    }
}