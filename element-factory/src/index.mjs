import { parse, compileScript } from '@vue/compiler-sfc'
import Generator from './generator.mjs'

export default (code, options = {}) => {
    const parsed = parse(`<template>${code}</template>`)
    // console.log(parsed)
    const ast = parsed.descriptor.template.ast
    const generator = new Generator(ast, options)
    const newParsed = parse(`
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
`)
    const ret = compileScript(newParsed.descriptor, { 
        id: 'abc',
        inlineTemplate: true
    })

    console.log(ret.content)

    return ret.content
}