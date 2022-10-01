import { createRouter, createWebHistory } from 'vue-router'
import { buildRouters } from './loader'
import schema from './schema'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: buildRouters(schema)
})

export default router
