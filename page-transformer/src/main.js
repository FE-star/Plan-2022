import { createApp } from 'vue'
import App from './App.vue'
import { add, defaultImg } from './utils/lazy'

const app = createApp(App, { page: [
    // 楼层1
    {
        title: '猜你喜欢',
        // 用grid布局
        type: 'grid',
        // 2栏
        col: 2,
        // 数据源ID
        dataId: '384121',
        // 使用普通卡片
        card: 'normal'
    },
    // 楼层2
    {
        title: '新年大促',
        // 用grid布局
        type: 'grid',
        // 2栏
        col: 3,
        // 数据源ID
        dataId: '384121',
        // 使用普通卡片
        card: 'normal'
    }
] })
// 应用级别添加directive
app.directive('src', {
    // 在绑定元素的 attribute 前或事件监听器应用前调用
    created: (el) => {
        // 设置默认图片
        el.src = defaultImg
    },
    // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
    mounted: (el, binding) => {
        // 挂载完成立刻加载图片
        add(el, binding.value)
    }
})

app.mount('#app')
