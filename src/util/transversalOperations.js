export const printKey = (node) => {
    console.log(node.key)
}

export const printMenuKey = (node) => {
    let pattern = ""
    for (let i = 0; i < node.depth(); i++) {
        pattern += "|  "
    }
    console.log(`${pattern}-> ${node.key}`)
}