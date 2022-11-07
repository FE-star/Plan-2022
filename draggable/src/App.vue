<script setup>
import { ref } from 'vue'
import Carousel from './components/Carousel.vue'
import Image from './components/Image.vue'
import Offer from './components/Offer.vue'
const components = {
  Carousel,
  Image,
  Offer
}
const content = ref([])
</script>

<template>
  <div v-draggable class="material-icon-list">
    <div class="material-icon" data-material="Image">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z" fill="none" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 36L31 26L21 35L14 29L6 35" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>图片</p>
    </div>
    <div class="material-icon" data-material="Carousel">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="40" height="30" rx="2" fill="none" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 42H28" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 42H36" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 42H6" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 42H44" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 42H14" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>轮播</p>
    </div>
    <div class="material-icon" data-material="Offer">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z" fill="none" stroke="#777" stroke-width="4" stroke-linejoin="round"/><path d="M15 18C15 18 17 22 24 22C31 22 33 18 33 18" stroke="#777" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>商品</p>
    </div>
  </div>
  <div class="drag-content" v-dragcontent="content">
    <div class="material-item" 
      v-for="(item, index) in content" 
      :class="{ disabled: item.state === 0, over: item.state === 2 }"
      :data-index="index"
      :key="index"
    >
      <component 
        :is="components[item.name]"
        :key="index"
        :props="item.props"
      ></component>
    </div>
  </div>
</template>

<style>
.material-icon-list:after {
  content: "";
  display: block;
  clear: both;
}
.material-icon {
  float: left;
}
.material-icon p {
  font-size: 16px;
  margin: 0px;
  text-align: center;
  color: #777;
}
.drag-content {
  width: 375px;
  min-height: 500px;
  border: 1px solid #ddd;
}
.material-item {
  min-height: 100px;
}
.material-item.over {
  outline: 1px dashed blueviolet;
}
</style>
