<style>
.month-sale {
    display: block;
    float: right;
    color: #999;
    font-size: 12px;
    margin-top: 5px;
}
</style>
<script setup>
const props = defineProps({
    value: String
})
</script>
<template>
    <span class="month-sale">{{props.value}}</span>
</template>
