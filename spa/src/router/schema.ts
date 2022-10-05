import { BuiltIn } from './builtin'

export interface SchameRouter {
    path: string,
    name: string,
    label: string,
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
        label: 'Home',
        component: BuiltIn.HOME
    }
]