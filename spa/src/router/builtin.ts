import type { RouteComponent } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export enum BuiltIn {
    HOME = '__BUILTIN__HOME__',
}

export const BuildInComponentMap: Record<string, RouteComponent> = {
    [BuiltIn.HOME]: HomeView
}