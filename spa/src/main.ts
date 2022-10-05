import { createApp } from 'vue'
import App from './App.vue'
import getRouter from './router'
import ElementPlus from 'element-plus'

async function init() {
    const app = createApp(App)
    const router = await getRouter()
    app.use(router)
    app.use(ElementPlus)
    app.mount('#app')
}

init()