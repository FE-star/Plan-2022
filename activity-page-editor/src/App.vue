<script setup>
import Render from './components/Render.vue'
import Panel from './components/Panel.vue'
import schema from './schemas/card.mjs'
import data from './data.mjs'
import { onMounted, ref } from 'vue'

let uuid = 0
let idMap = new Map
const currentComponent = ref(null)

function translateProps(props = {}) {
  const res = Object.keys(props).map(key => {
    if (props[key] !== '') {
      return `${key}="${props[key]}"`
    } else {
      return `${key}`
    }
  }).join(' ')
  if (res) return ` ${res}`
  return ''
}

function createElement(name) {
  // if (/^[A-Z]/.test(name)) {
  //   return `${name} v-select="true"`
  // } else {
    return `${name}`
  // }
}

function parse(json, ignores) {
  let res = ''
  switch (json.type) {
    case 'Element':
      res += `<${createElement(json.name)}${translateProps(json.props)}>
  ${
    json.children ? 
      json.children.map(v => parse(v, ignores))
        .reduce((a, b) => a + b, '') : 
      ''
  }
</${json.name}>`
      if (/^[A-Z]/.test(json.name) && ignores.indexOf(json.name) < 0) {
        // set id
        if (!json.id) {
          json.id = ++uuid + ''
          idMap.set(json.id, json)
        }
        res = `<Wrapper id=${json.id}>${res}</Wrapper>`
      }
      break;
    case 'Template':
      res += `<template ${json.name ? `#${json.name}` : ''}>
  ${
    json.children ? 
      json.children.map(v => parse(v, ignores))
        .reduce((a, b) => a + b, '') : 
      ''
  }      
</template>`
      break;
  }
  return res
}

let xml = parse(schema, ['Card'])

onMounted(() => {
  document.body.addEventListener('schema-change', (e) => {
    currentComponent.value = idMap.get(e.id)
  }, false)
})
</script>

<template>
  <Render :schema="xml" :data="data.data.result[0]"></Render>
  <Panel :data="currentComponent"></Panel>
</template>

<style scoped>

</style>
