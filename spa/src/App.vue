<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { getSchema, type SchemaRouter } from './router'
const menus: Ref<SchemaRouter[]>  = ref([])
const { pathname } = location
getSchema().then((schema) => {
  menus.value.push(...schema)
})
</script>

<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-active="pathname">
          <el-menu-item v-for="menu in menus" :index="menu.path">
            <RouterLink :to="menu.path">{{menu.label}}</RouterLink>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-main>
      <el-scrollbar>
        <RouterView />
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<style lang="less">
  .app-container {
    height: 100%;
    .el-menu-item a {
      text-decoration: none;
      color: blueviolet;
      width: 100%;
      height: 100%;
      &.router-link-active {
        color: blue;
      }
    }
    .el-menu-item.is-active {
      background-color: rgba(129, 42, 211, 0.1);
    }
  }
</style>
