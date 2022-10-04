<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu default-active="1">
          <el-menu-item index="1">
              <RouterLink to="/">Home</RouterLink>
          </el-menu-item>
          <el-menu-item index="2">
            <RouterLink to="/about">About</RouterLink>
          </el-menu-item>
          <el-menu-item index="3">
            <RouterLink to="/noexist">noexist</RouterLink>
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
