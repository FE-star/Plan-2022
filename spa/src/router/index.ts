import { createRouter, createWebHistory, type Router } from 'vue-router'
import { buildRouters } from './loader'
import schema, { type SchameRouter } from './schema'

const BASE_URL = import.meta.env.BASE_URL
const _schema: SchameRouter[] = []
let hasLoad = false
let hasLoaded = false
const _resolves: Function[] = []

export type SchemaRouter = SchameRouter
export const getSchema = (): Promise<SchameRouter[]> => {
  if (!hasLoad) {
    hasLoad = true
    fetch('/schema.json')
      .then(response => response.json())
      .then((json): SchameRouter[] => {
        _schema.push(...schema)
        _schema.push(...json as SchameRouter[])
        hasLoaded = true
        return _schema
      }).then(result => {
        _resolves.forEach(resolve => resolve(result))
      })
  }
  if (hasLoaded) {
    return new Promise(resolve => resolve(_schema))
  } else {
    return new Promise((resolve) => {
      _resolves.push(resolve)
    })
  }
}

export default () => {
  return getSchema()
    .then((schema: SchameRouter[]): Router => {
      return createRouter({
        history: createWebHistory(BASE_URL),
        routes: buildRouters(schema)
      }) 
    })
}
