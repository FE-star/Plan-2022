<script setup>
import FilterHeader from './FilterHeader.vue'
import Table from './Table.vue'
const props = defineProps(['show', 'pageSchema', 'result'])
const emit = defineEmits(['close'])
</script>

<style scoped>
    .full-screen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        overflow-y: auto;
    }
    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        color: blueviolet;
        cursor: pointer;
    }
</style>

<template>
    <div v-show="props.show" class="full-screen">
        <a class="close" @click="emit('close')">x</a>
        <FilterHeader :schema="props.pageSchema.req" />
        <Table :schema="props.pageSchema.res" :result="props.result" />
    </div>
</template>