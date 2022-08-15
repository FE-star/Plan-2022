<style scoped>
.img-container {
    background-color: rgba(27, 23, 67, 0.03);
    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
            border-radius: 10px;
}
.img-container img {
  display: block;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 10px;
     -moz-border-radius: 10px;
          border-radius: 10px;
}
</style>

<script setup>
const props = defineProps({
    value: String
})
</script>

<template>
    <div class="img-container">
        <img :src="props.value" />
    </div>
</template>