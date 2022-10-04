import type { RouteComponent } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export enum BuiltIn {
    HOME = '__BUILTIN__HOME__',
}

/**
 * 被构建的页面
 */
export const BuildInComponentMap: Record<string, RouteComponent> = {
    [BuiltIn.HOME]: HomeView
}