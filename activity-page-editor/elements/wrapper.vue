<style scoped>
.wrapper:after {
    content: "";
    display: block;
    clear: both;
}
.wrapper:hover {
    outline: 1px solid red;
    opacity: 0.2
}
</style>

<script setup>
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