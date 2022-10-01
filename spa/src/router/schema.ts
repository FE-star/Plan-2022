import { BuiltIn } from './builtin'

export interface SchameRouter {
    path: string,
    name: string,
    component: string | BuiltIn
}

/**
 * 改成这样是为了支持对菜单编排，以及异步加载
 */
export default [
    /**
     * BuiltIn的页面
     */
    {
        path: '/',
        name: 'home',
        component: BuiltIn.HOME
    },
    {
        path: '/about',
        name: 'about',
        component: 'vue:AboutView'
    },
    /**
     * 不存在的页面
     */
    {
        path: '/noexist',
        name: 'noexist',
        component: 'vue:noexist'
    }
]