function spaces(indent, num = 2) {
    if (indent === 0) return ''
    const arr = new Array(indent * num)
    arr.fill(' ')
    return arr.join('')
}

export default class Code {
    constructor() {
        this.code = []
        this.indent = 0
        this.noN = false
    }

    addCode(code) {
        this.code.push(code)
    }

    addLine(line) {
        if (this.noN) {
            this.code.push(line)
            this.noN = false
        } else {
            this.code.push(`\n${spaces(this.indent)}${line}`)
        }
    }

    addBlock(block) {
        block = block.trim()
        const lines = block.trim().split('\n')
        for (let i = 0; i < lines.length; i++) {
            this.addLine(lines[i])
        }
    }
    
    trimEnd(reg) {
        const last = this.code.pop()
        this.code.push(last.trimEnd(reg))
    }
    
    noNeedN() {
        this.noN = true
    }

    toString(indent) {
        const res = this.code.join('')
        if (!indent) return res
        return res.replace(/\n/g, `\n${spaces(indent)}`)
    }

}