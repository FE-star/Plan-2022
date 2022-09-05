export default (node) => {
    // Text
    if (node.value.type === 2) {
        return `${node.name}="${node.value.content}"`
    }
}