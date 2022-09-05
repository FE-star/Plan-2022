import bind from './bind.mjs'
import attribute from './attribute.mjs'
import directive from './directive.mjs'

const typeMap = {
    6: attribute,
    7: directive,
}

export default {
    enter: (generator, node) => {
        const props = node.props.map(v => {
            const helper = typeMap[v.type]
            if (helper) {
                return helper(v)
            } else {
                console.error(`${v.type} has not helper`)
            }         
        })
        generator.curTpl.addLine(`<${node.tag}${props.length > 0 ? ' ' + props.join(' '): ''}>`)
        generator.curTpl.indent++
    },
    leave: (generator, node) => {
        generator.curTpl.indent--
        generator.curTpl.addLine(`</${node.tag}>`)
    }
    
}