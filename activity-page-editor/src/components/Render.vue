<style type="less">
.render-container {
    height: 100%;
    width: 1080px;
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

export default {
    props: {
        schema: String,
        data: Object
    },
    data: () => {
        return { current: 'Blank' }
    },
    components: {
        Blank
    },
    watch: {
        schema: {
            handler(value) {
                if (this.script) {
                    document.body.removeChild(this.script)
                    this.script = null
                    this.current = 'Blank'
                }

                let js = factory(value)
                    .replace(/\"vue\"/g, '"/node_modules/.vite/deps/vue.js"')
                // TODO：找了2个小时，没找到更优化的办法办法～
                js += `;\n window.__render__(__default__)`
                const script = this.script = document.createElement('script')
                script.type = 'module'
                script.innerHTML = js
                window.__render__ = (Component) => {
                    this.$.components.Current = Component
                    this.current = 'Current'
                }
                document.body.appendChild(script) 
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