export default (generator, node) => {
    // simple expression
    if (node.content.type === 4) {
        generator.curTpl.addLine(`{{${node.content.content}}}`)
    }
}