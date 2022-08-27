<style scoped>
    p {
        color: #333;
        font-size: 16px;
        line-height: 23px;
        margin: 0;
        width: 186px;
    }
    p:active {
        color: red;
    }
    p:hover {
        color: red;
    }
</style>
<script setup>
const props = defineProps({
    msg: String
})
</script>
<template>
    <p>{{props.msg}}</p>
</template>