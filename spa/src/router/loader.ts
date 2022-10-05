import ErrorView from '../views/ErrorView.vue'
import type { RouteComponent, RouteRecordRaw } from 'vue-router'
import { BuiltIn, BuildInComponentMap } from './builtin'
import type { SchameRouter } from './schema'

interface Loader {
    is: (name: string) => boolean
    load: (name: string) => () => Promise<RouteComponent>
}

const loaders: Loader[] = []

export function register(loader: Loader) {
    loaders.push(loader)
}
// @ts-ignore
window.registerLoader = register

function isInstance<T extends object>(value: string | number, type: T): type is T {
    return Object.values(type).includes(value)
}

export function getComponent(name: string | BuiltIn): Promise<RouteComponent> | RouteComponent {
    let Component
    if (isInstance(name, BuiltIn)) {
        Component = BuildInComponentMap[name]
    } else {
        let matchLoader: Loader | undefined
        loaders.every(loader => {
            if (loader.is(name)) {
                matchLoader = loader
                return false
            }
            return true
        })
        if (matchLoader) {
            Component = wrapper(matchLoader.load(name))
        }
    }
    if (!Component) {
        Component = ErrorView
    }
    return Component
}

export function buildRouters(schema: SchameRouter[]): RouteRecordRaw[]  {
    return schema.map(r => {
        return {
            path: r.path,
            name: r.name,
            component: getComponent(r.component)
        }
    })
}

const wrapper = (fn: () => Promise<RouteComponent>) => {
    return async () => {
        let res
        try {
            res = await fn()
        } catch(e) {
            res = {}
            Object.assign(res, ErrorView)
            // @ts-ignore
            const setup = res.setup
            // @ts-ignore
            res['setup'] = function (__props, ext) {
                // @ts-ignore
                const _nprops = Object.assign({}, __props, { error: e.message, stack: e.stack })
                return setup(_nprops, ext)
            }
        }
        return res
    }
}

register({
    is(name) {
        return name.indexOf('vue:') === 0
    },
    load(name) {
        return () => import(`../views/${name.substring(4)}.vue`)
    }
})

register({
    is(name) {
        return name.indexOf('vue.es:') === 0
    },
    load(name) {
        return () => {
            // <link href="https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.17/index.css" rel="stylesheet">
            const link = document.createElement('link')
            const componentName = name.substring(7)
            link.rel= 'stylesheet'
            link.href = `/materials/${componentName}/dist/style.css`
            const head = document.getElementsByTagName('head')
            if (head) head[0].appendChild(link)
            return import(/* @vite-ignore */ `/materials/${componentName}/dist/index.es.js`)
        }
    }
})