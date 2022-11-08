import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DragManager from './dragmanager.js'

const dragManager = new DragManager

createApp(App)
    .directive('draggable', (el) => {
        el.querySelectorAll('[data-material]').forEach((el) => {
            el.draggable = true
        })
        el.addEventListener('dragstart', (e) => dragManager.dragstart(e))
    })
    .directive('dragcontent', (el, binding) => {
        el.querySelectorAll('.material-item:not([draggable])').forEach(el => {
            if (!el.draggable) {
                el.draggable = true
                el.addEventListener('dragstart', (e) => dragManager.dragexist(e))
            }
        })
        dragManager.setContainer(el, binding)
    })
    .mount('#app')
