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
    mounted: function () {
        let js = factory(this.schema)
            .replace(/\"vue\"/g, '"/node_modules/.vite/deps/vue.js?v=d9f7925a"')
        // TODO：找了2个小时，没找到更优化的办法办法～
        js += `;\n window.__render__(__default__)`
        const script = document.createElement('script')
        script.type = 'module'
        script.innerHTML = js
        window.__render__ = (Component) => {
            console.log(Component)
            this.$.components.Current = Component
            this.current = 'Current'
        }
        document.body.appendChild(script) 
    }
}
</script>

<template>
    <div class="render-container">
        <component :is="current" v-bind="data" />
    </div>
</template>