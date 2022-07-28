const blank = /^\s+$/

export default (generator, node) => {
    if (!blank.test(node.content)) {
        // ignore
    }
}