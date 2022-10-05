<script setup>
  function onClick() {
    history.back()
  }
</script>

<template>
  <el-result
        icon="success"
        title="About Me"
        sub-title="关于我"
      >
    <template #extra>
      <el-button class="success-btn" type="primary" @click="onClick">Back</el-button>
    </template>
  </el-result>
</template>

<style scoped>
  .success-btn {
    color: whitesmoke;
  }
</style>
