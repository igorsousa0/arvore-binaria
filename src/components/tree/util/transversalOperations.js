export const printKey = node => {
    console.log(node.key)
}

//TODO
export const printIndentedKey = node => {
    let pattern = ""

    for (let i = 0; i < node.depth(); i++) {
        pattern += "|  "
    }

    console.log(`${pattern}-> ${node.key}`)

}

export const printIndentedKeyHeight = node => {
    let pattern = ""

    for (let i = 0; i < node.depth(); i++) {
        pattern += "|  "
    }

    console.log(`${pattern}-> ${node.key}:${node.height()}`)

}