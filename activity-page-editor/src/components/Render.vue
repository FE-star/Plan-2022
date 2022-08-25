<style type="less">
.render-container {
    height: 100%;
    min-width: 1080px;
    padding: 10px;
    background-color: #fff;
}
.render-container:after {
    content: "";
    display: block;
    clear: both;
}
</style>

<script>
import factory from 'element-factory'
import Blank from './blank.vue'
import { parse } from '../utils.mjs'

function buildDeps(deps) {
    return deps.map(dep => {
        const { name, value } = dep
        let js = factory(value, { browser: true })
            .replace(/\"vue\"/g, '"/node_modules/.vite/deps/vue.js"')
        js += `;\n window.__${name}__ = __default__`
        const script = document.createElement('script')
        script.type = 'module'
        script.innerHTML = js
        document.body.appendChild(script) 
        return script
    })
}

export default {
    props: {
        schema: Object,
        data: Object,
        name: String
    },
    data() {
        return { current: 'Blank' }
    },
    components: {
        Blank
    },
    watch: {
        schema: {
            handler(xmls) {
                const [defaultXml, ...deps] = xmls
                const { value } = defaultXml

                if (this.script) {
                    document.body.removeChild(this.script)
                    this.deps.forEach(script => {
                        document.body.removeChild(script)
                    })
                    this.script = null
                    this.deps.length = 0
                    this.current = 'Blank'
                }

                this.deps = buildDeps(deps)

                setTimeout(() => {
                    let js = factory(value, { browser: true })
                        .replace(/\"vue\"/g, '"/node_modules/.vite/deps/vue.js"')
                    // TODO：找了2个小时，没找到更优化的办法办法～
                    js += `;\n window.__render${this.name}__(__default__)`
                    const script = this.script = document.createElement('script')
                    script.type = 'module'
                    script.innerHTML = js
                    window[`__render${this.name}__`] = (Component) => {
                        this.$.components.Current = Component
                        this.current = 'Current'
                    }
                    document.body.appendChild(script) 
                }, 0)                
            },
            immediate: true
        }
    }
}
</script>

<template>
    <div class="render-container">
        <component :is="current" v-bind="data" />
    </div>
</template>