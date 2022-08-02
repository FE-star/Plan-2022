import { createApp } from 'vue'
import Delegator from './app.tpl'
// import Delegator from './card.tpl'
import data from './data/data.mjs'

// const app = createApp(Delegator, data.data.result[0])
const app = createApp(Delegator, data.data)
app.mount('#app')