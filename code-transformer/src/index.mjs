import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
import Generator from './generator.mjs'


export default (code, options = {}) => {
    const parsed = parse(code.trim(''))
    const { ast } = parsed.descriptor.template
    const generator = new Generator(ast, options)

    return {
        template: generator.result.template.toString()
    }
}