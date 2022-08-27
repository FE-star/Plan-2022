<style scoped>
.wrapper:after {
    content: "";
    display: block;
    clear: both;
}
.wrapper:hover {
    /* outline: 1px solid red; */
    opacity: 0.6
}
</style>

<script setup>
// 用这个玩意本质上是因为按照inlineTemplate方式构建directive不能正确构建
const props = defineProps({
    id: String
})
function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const ne = new Event('schema-change')
    ne.id = props.id
    document.body.dispatchEvent(ne)
}
</script>

<template>
    <div class="wrapper" @click="onClick">
        <slot></slot>
    </div>
</template>