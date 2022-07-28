<style>
.price-delete-value {
  display: inline-block;
  font-size: 22px;
  line-height: 22px;
  text-decoration: line-through;
  color: red;
}
.price-value {
  display: inline-block;
  font-size: 22px;
  line-height: 22px;
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
    <span class="price-delete-value"><em>¥</em>{{props.value * 1.2}}</span>
    <span class="price-value"><em>¥</em>{{props.value}}</span>
</template>
