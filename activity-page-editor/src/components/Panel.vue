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

<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
<div class="panel-container">
{{props.data}}
</div>
</template>