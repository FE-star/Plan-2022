<script setup>
import { computed, unref } from 'vue';

const props = defineProps(['schema'])
const filters = computed(() => {
    const res = []
    if (props.schema) {
        for (let key in props.schema.props) {
            res.push(Object.assign({
                key
            }, props.schema.props[key]))
        }

        return res
    } else {
        return res
    }
})
</script>

<style scoped>
</style>

<template>
    <div>
        <div v-for="filter in filters">
            <p>{{filter.key}}: <input value="" /></p>
        </div>
        <button>search</button>
    </div>
</template>