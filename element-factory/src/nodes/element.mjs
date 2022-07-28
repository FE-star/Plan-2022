const startWithCapacity = /^[A-Z]/

export default (generator, node) => {
    if (startWithCapacity.test(node.tag)) {
        generator.addDpe(node.tag)
    }
}