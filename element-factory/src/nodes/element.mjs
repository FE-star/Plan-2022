import bind from './bind.mjs'
const startWithCapacity = /^[A-Z]/

export default (generator, node) => {
    if (startWithCapacity.test(node.tag)) {
        node.props.forEach(prop => {
            prop.type === 7 && bind(generator, prop)
        })
        generator.addDpe(node.tag)
    } else if (node.tag.indexOf('Tpl_') > -1) {
        generator.addDpe(node.tag)
    }
}