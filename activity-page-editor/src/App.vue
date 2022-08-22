<script setup>
import { sfc } from 'element-factory'
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
  return `${name}`
}

function parse(json, ignores, noWrapper) {
  let res = ''
  switch (json.type) {
    case 'Element':
      res += `<${createElement(json.name)}${translateProps(json.props)}>
  ${
    json.children ? 
      json.children.map(v => parse(v, ignores, noWrapper))
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
        if (!noWrapper) {
          res = `<Wrapper id=${json.id}>${res}</Wrapper>`
        }
      }
      break;
    case 'Template':
      res += `<template ${json.name ? `#${json.name}` : ''}>
  ${
    json.children ? 
      json.children.map(v => parse(v, ignores, noWrapper))
        .reduce((a, b) => a + b, '') : 
      ''
  }      
</template>`
      break;
  }
  return res
}

let xml = ref(parse(schema, ['Card']))

onMounted(() => {
  document.body.addEventListener('schema-change', (e) => {
    currentComponent.value = idMap.get(e.id)
  }, false)
})

function onchange(keys, value) {
  const arr = keys.split('.')
  const lastKey = arr.pop()
  let res = currentComponent.value
  for (let key of arr) {
    res = res[key]
  }
  res[lastKey] = value
  // 如果是切换组件就把 props 填空
  if (keys === 'name') {
    res.props = {}
  }
  xml.value = parse(schema, ['Card'])
}

function createCode(xml) {
  if ('download' in document.createElement('a')) {
    let eleLink = document.createElement('a');
    eleLink.download = 'component.vue';
    let blob = new Blob([sfc(xml)])
    eleLink.href = URL.createObjectURL(blob)

    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
  }
}
</script>

<template>
  <button @click="createCode(parse(schema, [], true))">出码</button>
  <Render :schema="xml" :data="data.data.result[0]"></Render>
  <Panel :data="currentComponent" @change="onchange"></Panel>
</template>

<style scoped>

</style>
