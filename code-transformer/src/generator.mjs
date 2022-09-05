import element from './nodes/element.mjs'
import text from './nodes/text.mjs'
import Code from './code.mjs'
import comment from './nodes/comment.mjs'
import interpolation from './nodes/interpolation.mjs'

const typeMap = {
    1: element,
    2: text,
    3: comment,
    5: interpolation,
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
        this.props = []
        this.result = {
            template: new Code
        }
        this.curTpl = this.result.template
        this.visit(this.ast)
    }

    addDpe(name) {
        if (this.depencencies.indexOf(name) < 0) {
            this.depencencies.push(name)
        }
    }

    expression(exp) {
        const { content } = exp
        if (this.props.indexOf(content) < 0) {
            this.props.push(exp.content)
            console.log(this.props)
        }
        // TODO: this should parse the expression
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
        const resolve = this.options.resolve || ((elementName) => { 
            if (elementName.indexOf('Tpl_') > -1) {
                return `./${elementName.slice(4)}.tpl`
            } else {
                return `./elements/${toHyphenCase(elementName)}.vue`
            }
        })
        this.depencencies.forEach(dep => {
            if (this.options.browser) {
                if (dep.indexOf('Tpl_') > -1) {
                    code.addLine(`const ${dep} = window.__${dep}__`)
                } else {
                    code.addLine(`import ${dep} from '${resolve(dep)}'`)
                }
            } else {
                code.addLine(`import ${dep} from '${resolve(dep)}'`)
            }
        })

        return code.toString()
    }
}