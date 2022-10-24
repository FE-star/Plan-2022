import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'
import bodyParser from 'body-parser'


function makeOffers({ search, type }, num) {
  const res = []
  let max = num
  while (max--) {
    res.push({
      title: `${search}__${max}`,
      type,
      author: ['Daniel', 'Mark', 'Peter'][max % 3]
    })
  }
  return res
}

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort
) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/index.html'), 'utf-8')
    : ''

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite = await (
    await import('vite')
  ).createServer({
    root,
    logLevel: 'error',
    configFile: './vite.config.js',
    server: {
      middlewareMode: true,
      watch: {},
      hmr: {
        port: hmrPort
      }
    },
    appType: 'mpa'
  })
  app.use('/query', bodyParser.json({ type: 'application/json' }))
  app.post('/query', async (req, res) => {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      code: 0,
      current: 0,
      total: 100,
      list: makeOffers(req.body, 20)
    }))
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  return { app, vite }
}

createServer().then(({ app }) =>
  app.listen(6173, () => {
    console.log('http://localhost:6173')
  })
)