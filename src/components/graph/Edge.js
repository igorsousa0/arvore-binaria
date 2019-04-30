class Edge {
    constructor(origin, destiny, weigth = null) {
        this.origin = origin
        this.destiny = destiny
        this.weigth = weigth
    }

    element() {
        return this.weigth
    }

    endPoints() {
        return [this.origin, this.destiny]
    }

}

export default Edge