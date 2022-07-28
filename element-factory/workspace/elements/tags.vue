<style scoped>
.tag-list {
  height: 25px;
  overflow: hidden;
}
.tag-list .tag-item {
  display: inline-block;
  height: 20px;
  margin-right: 6px;
  padding: 0 4px;
  color: #ff5000;
  font-size: 12px;
  line-height: 18px;
  vertical-align: top;
  border: 1px solid #ff5000;
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
}
.tag-list .tag-item.graphic-tag {
  padding: 0;
  border: none;
}
.tag-list .tag-item.graphic-tag span {
  display: inline-block;
  padding: 0 5px;
  line-height: 20px;
}
.tag-list .tag-item.graphic-tag .left {
  -webkit-border-radius: 3px 0 0 3px;
     -moz-border-radius: 3px 0 0 3px;
          border-radius: 3px 0 0 3px;
}
.tag-list .tag-item.graphic-tag .right {
  -webkit-border-radius: 0 3px 3px 0;
     -moz-border-radius: 0 3px 3px 0;
          border-radius: 0 3px 3px 0;
}
.tag-list img {
  height: 25px;
  vertical-align: top;
}
</style>
<script setup>
const props = defineProps({
    tags: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="tag-list">
        <div class="tag-item" v-for="item in props.tags" :key="item" :style="{color: item.font_color, borderColor: item.border_color, background: item.bg_color}">
            {{item.text}}
        </div>
    </div>
</template>