export default (node) => {
    switch (node.name) {
        case 'if':
            if (node.exp.type === 4) {
                return `wx:if="{{${node.exp.content}}}"`
            }
            return `wx:if="不知道"`
        case 'on':
            let type = node.arg.content
            if (type === 'click') {
                type = 'tap'
            }
            return `bind${type}="${node.exp.content}"`
        case 'else-if':
            if (node.exp.type === 4) {
                return `wx:elif="{{${node.exp.content}}}"`
            }
            return `wx:elif="不知道"`
        case 'else':
            return `wx:else`
        case 'bind':
            return `${node.arg.content}="{{${node.exp.content}}}"`
    }
    
}