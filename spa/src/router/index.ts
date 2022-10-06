import { createRouter, createWebHistory, type Router } from 'vue-router'
import { buildRouters, type Loader } from './loader'
import schema, { type SchameRouter } from './schema'

const BASE_URL = import.meta.env.BASE_URL
const _schema: SchameRouter[] = []
let hasLoad = false
let hasLoaded = false
const _resolves: Function[] = []

const prepareSchema = (json: SchameRouter[]): SchameRouter[] => {
  _schema.push(...schema)
  _schema.push(...json)
  hasLoaded = true
  return _schema
}

const done = (result: SchameRouter[]) => {
  _resolves.forEach(resolve => resolve(result))
  _resolves.length = 0
}

declare global {
  interface Window { 
    SPA: {
      loaders?: Loader[],
      schema?: Promise<SchameRouter[]>
    }
  }
}

export type SchemaRouter = SchameRouter
export const getSchema = (): Promise<SchameRouter[]> => {
  if (!hasLoad) {
    hasLoad = true
    const p: Promise<SchameRouter[]> | undefined = window.SPA?.schema
    if (p) {
      console.log('asdfasdf')
      p.then(prepareSchema)
        .then(done)
    } else {
      fetch('/schema.json')
        .then(response => response.json())
        .then(prepareSchema)
        .then(done)
    }
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
