import element from './nodes/element.mjs'
import text from './nodes/text.mjs'
import Code from './code.mjs'
import comment from './nodes/comment.mjs'

const typeMap = {
    1: element,
    2: text,
    3: comment,
}

function walk(parent, fn) {
    if (parent.children && parent.children.length > 0) {
        parent.children.forEach(child => {
            fn(child)
        })
    }
}

function toHyphenCase(str) {
    const char = str.charAt(0)
    const newStr = char.toLowerCase() + str.slice(1)
    return newStr.replace(/([A-Z])/g, (value, replaceValue) => {
        return '-' + replaceValue.toLowerCase()
    })
}

export default class Generator {
    constructor(ast, options) {
        this.ast = ast
        this.options = options
        this.depencencies = []
        this.visit(this.ast)
        console.log('depencencies === ', this.depencencies)
    }

    addDpe(name) {
        if (this.depencencies.indexOf(name) < 0) {
            this.depencencies.push(name)
        }
    }

    visit(parent) {
        const generator = this
        walk(parent, (child) => {
            const typeHandler = typeMap[child.type]
            if (typeHandler) {
                let enter, leave
                if (typeof typeHandler === 'object') {
                    enter = typeHandler.enter
                    leave = typeHandler.leave
                } else {
                    enter = typeHandler
                }
                enter && enter(generator, child)
                this.visit(child)
                leave && leave(generator, child)
            } else {
                throw new Error(`Node type = ${child.type} is not defined`)
            }
        })
    }

    buildScript() {
        const code = new Code
        const resolve = this.options.resolve || ((elementName) => { return `./elements/${toHyphenCase(elementName)}.vue` })
        this.depencencies.forEach(dep => {
            code.addLine(`import ${dep} from '${resolve(dep)}'`)
        })

        return code.toString()
    }
}