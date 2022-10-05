import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
window.Vue = Vue

function init() {
    const script = document.createElement('script')
    script.src = 'https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.17/index.full.js'
    script.onload = function () {
        const app = createApp(App)
        app.use(window.ElementPlus)
        app.mount('#app')
    }
    document.body.appendChild(script)
}

init()
