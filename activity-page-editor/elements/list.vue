<style>
.card-container.col2 {
    width: 990px;
    padding: 0 22px;
    margin: auto;
}
.card-container.col3 {
    width: 1190px;
    padding: 0 19px;
    margin: auto;
}
</style>

<script setup>
    const props = defineProps({
        result: Array,
        layout: String,
    })

    const classObject = {
        'card-container': true,
        'col2': props.layout === '2',
        'col3': props.layout === '3'
    }
</script>
<template>
    <div :data-layout="layout" :class="classObject">
        <slot v-for="item in props.result" v-bind="item"></slot>
    </div>
</template>