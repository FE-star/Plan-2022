import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc'
import Generator from './generator.mjs'

export function sfc(code, options = {}) {
    const parsed = parse(`<template>${code}</template>`)
    // console.log(parsed)
    const ast = parsed.descriptor.template.ast
    const generator = new Generator(ast, options)
    return `
<script setup>
${generator.buildScript()}
</script>  
<script>
export default {
    data: (el) => {
        console.log('data === ', el.$attrs)
        return el.$attrs
    }
}
</script>
<template>
${code}
</template>
`
}
export default (code, options = {}) => {
    const newParsed = parse(sfc(code, options))
    const ret = compileScript(newParsed.descriptor, { 
        id: 'abc',
        inlineTemplate: true
    })

    console.log(ret.content)
    return ret.content
}