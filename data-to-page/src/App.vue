<script setup>
import { ref, computed } from 'vue'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import Page from './components/page.vue'

const api = ref('/query')
const req = ref(JSON.stringify({
  search: 'abc',
  type: 'A',
}))
const res = ref(null)
const reqSchema = ref(null)
const resSchema = ref(null)
const pageSchema = computed(() => {
  const req = reqSchema.value
  const res = resSchema.value
  return {
    type: 'FilterList',
    req,
    res
  }
})
let isShow = ref(false)

async function handleSubmit() {
  const json = await fetch(api.value, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: req.value
  }).then(res => res.json())
  res.value = json
}

function anaArr(arr, schema) {
  Object.assign(schema, {
    type: 'Array',
  })
  const itemSchema = {}
  arr.forEach(obj => {
    const type = /^\[object\s(\w+)\]$/.exec(Object.prototype.toString.call(obj))[1]
    switch (type) {
      case 'String':
        if (!itemSchema.type) itemSchema.type = 'String'
        if (itemSchema.type !== 'String') throw new Error(`array item's type must be wrong!`)
        break
      case 'Number':
        if (!itemSchema.type) itemSchema.type = 'Number'
        if (itemSchema.type !== 'Number') throw new Error(`array item's type must be wrong!`)
        break
      case 'Object':
        if (!itemSchema.type) itemSchema.type = 'Object'
        if (itemSchema.type !== 'Object') throw new Error(`array item's type must be wrong!`)
        anaObj(obj, itemSchema)
        break
      case 'Array':
        if (!itemSchema.type) itemSchema.type = 'Array'
        if (itemSchema.type !== 'Array') throw new Error(`array item's type must be wrong!`)
        anaArr(obj, itemSchema)
        break
    }
  })
  schema.inst = itemSchema
}

function anaObj(obj, schema) {
  schema.type = 'Object'
  if (!schema.props) schema.props = {}
  Object.keys(obj).forEach(key => {
    const type = /^\[object\s(\w+)\]$/.exec(Object.prototype.toString.call(obj[key]))[1]
    switch (type) {
      case 'String':
        if (schema.props[key] && schema.props[key].type !== 'String') {
          throw new Error(`prop ${key}'s type must be wrong!`)
        }
        schema.props[key] = {
          type: 'String'
        }
        break
      case 'Array':
        if (schema.props[key] && schema.props[key].type !== 'Array') {
          throw new Error(`prop ${key}'s type must be wrong!`)
        }
        const aschema = {}
        schema.props[key] = aschema
        anaArr(obj[key], aschema)
        break
      case 'Object':
        if (schema.props[key] && schema.props[key].type !== 'Object') {
          throw new Error(`prop ${key}'s type must be wrong!`)
        }
        const nschema = {}
        schema.props[key] = nschema
        anaObj(obj[key], nschema)
        break
      case 'Number':
        if (schema.props[key] && schema.props[key].type !== 'Number') {
          throw new Error(`prop ${key}'s type must be wrong!`)
        }
        schema.props[key] = {
          type: 'Number'
        }
        break
    }
  })
}

function handleAnalyse() {
  const inputSchema = {}
  const outputSchema = {}
  const input = JSON.parse(req.value)
  const output = res.value
  if (input) {
    anaObj(input, inputSchema)
    reqSchema.value = inputSchema
  }
  if (output) {
    anaObj(output, outputSchema)
    resSchema.value = outputSchema
  }
}

function handleCreate() {
  isShow.value = true
}

function closePage() {
  isShow.value = false
}
</script>

<template>
  <div>
    <div>
      <button @click="handleSubmit">提交</button>
      <button @click="handleAnalyse">解析</button>
      <button @click="handleCreate">生成</button>
    </div>
    <div class="block">
      <p>接口：<input v-model="api"/></p>
      <p>入参：<textarea v-model="req"></textarea></p>
      <p>出参：<VueJsonPretty :data="res" /></p>
    </div>
    <div class="block">
      <p>入参：<VueJsonPretty :data="reqSchema" /></p>
      <p>出参：<VueJsonPretty :data="resSchema" /></p>
    </div>
    <Page :show="isShow" @close="closePage" :pageSchema="pageSchema" :result="res"></Page>
  </div>
</template>

<style scoped>
  textarea {
    width: 300px;
    height: 200px;
  }
  .block {
    width: 50%;
    float: left;
  }
</style>
