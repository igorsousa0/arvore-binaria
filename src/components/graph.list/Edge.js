class Edge {
    constructor(origin, destination, element = null) {
        this._origin = origin
        this._destination = destination
        this._element = element
    }

    get element() {
        return this._element
    }

    endPoints() {
        return [this._origin, this._destination]
    }

    opposite(vertex) {
        //TODO: adicionar verificacao para saber
        //se o vertex passado como parametro eh um dos endpoits da aresta
        if (vertex === this._origin) { 
            return this._destination
        } else {
            return this._origin
        }
    }

}

export default Edge