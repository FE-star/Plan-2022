import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import module from './utils/data'

export async function render(url, manifest) {
  const app = createApp({ page: [
    // 楼层1
    {
        title: '猜你喜欢',
        // 用grid布局
        type: 'flex-grid',
        // 2栏
        col: 2,
        // 数据源ID
        dataId: '384121',
        // 使用普通卡片
        card: 'normal',
        data: module.data.result
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
        card: 'normal',
        data: module.data.result
    }
] })
  const ctx = {}
  const html = await renderToString(app, ctx)
  return [html]
}