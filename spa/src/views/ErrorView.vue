<script setup lang="ts">
    const props = defineProps({
        error: String,
        stack: Array
    })

    console.error(props.stack)
</script>

<template>
    {{props.error}}: <br />
    {{props.stack}}
</template>