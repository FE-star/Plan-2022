import { parseVueRequest } from './query'
import postcss from 'postcss'
import pkg from '../package.json'

const namespace = (function () {
  const names = pkg.name.split('/')
  return names[names.length - 1]
})()

function createNamespac() {
  return (css) => {
    css.walkRules((rule) => {
      const newSelector = `.${namespace} ${rule.selector}`
      rule.selector = newSelector
    })
  }
}

export const post = function () {
  return {
    name: 'wrap-namespace',
    async transform(code, id) {
      const { query } = parseVueRequest(id)
      if (query.type === 'style') {
        return postcss([createNamespac()]).process(code, { from: id })
          .then(result => {
            return {
              code: result.css
            }
          })
      }
    }
  }
}

export const pre = function () {
  return {
    name: 'wrap-namespace',
    async transform(code, id) {
      if (id.match(/src\/App\.vue$/)) {
        // console.log(code, id)
        return { code: 
            code.replace(/\<template\>/, `<template><div class="${namespace}">`)
              .replace(/\<\/template\>/, `</div></template>`)
        }
      }
    }
  }
}