<style>
.panel-container {
    background-color: #fff;
    width: 300px;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    color: #000;
}
</style>

<script>
import data from '../data.mjs'
const keys = Object.keys(data.data.result[0])
const components = [
    'CirclePic',
    'RectPic',
    'DeletePrice',
    'Price',
    'Tags',
    'Title'
]
const interfaces = {
    CirclePic: {
        value: {
            label: '图片地址'
        }
    },
    RectPic: {
        value: {
            label: '图片地址'
        }
    },
    DeletePrice: {
        value: {
            label: '价格'
        }
    },
    Price: {
        value: {
            label: '价格'
        }
    },
    Title: {
        msg: {
            label: '文字'
        }
    },
    Tags: {
        tags: {
            label: '标签'
        }
    }
}

export default {
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    data(vm) {
        return {
            keys,
            components
        }
    },
    computed: {
        props() {
            const attrs = this.data && this.data.props || {}
            const _interface = interfaces[this.data.name];
            return Object.keys(_interface).map(_key => {
                const key = _key in attrs ? _key : `:${_key}`
                return { key: key, value: attrs[key], label: _interface[_key].label }
            })
        }
    },
    methods: {
        oninput(item, event) {
            item.value = event
        }
    },
    emits: ['change']
}
</script>

<template>
<div class="panel-container" v-if="data">
    <p>组件选择</p>
    <div>
        <select v-model="data.name" @change="$emit('change', 'name', $event.target.value)">
            <option v-for="value in components" :value="value">{{value}}</option>
        </select>
    </div>
    <p>属性列表：</p>
    <div v-for="item in props">
        <div v-if="item.key.indexOf(':') === 0">
            {{ (item.label || item.key.slice(1)) + ': ' }} <select v-model="item.value" @change="$emit('change', `props.${item.key}`, $event.target.value)">
                <option v-for="value in keys" :value="value">{{value}}</option>
            </select>
        </div>
        <div v-else>
            {{ (item.label || item.key) + ': ' }} <input v-model="item.value" @change="$emit('change', `props.${item.key}`, $event.target.value)" />
        </div>    
    </div>
</div>
</template>