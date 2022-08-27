<style>
.price-value {
  display: inline-block;
  font-size: 22px;
  line-height: 22px;
  color: #ff5000;
}
.price-value em {
  margin-right: 4px;
  font-size: 14px;
  font-family: "Microsoft Yahei";
  vertical-align: middle;
}
.price-desc {
  margin-left: 2px;
  font-size: 12px;
  vertical-align: text-bottom;
}
</style>
<script setup>
const props = defineProps({
    value: String
})
</script>
<template>
    <span class="price-value"><em>¥</em>{{props.value}}</span>
</template>
