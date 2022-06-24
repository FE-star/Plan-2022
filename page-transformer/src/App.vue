<script setup>
  import Layout from './components/layout.vue'
  import Grid from './components/grid.vue'
</script>

<template>
  <Layout>
    <template #default>
      <Grid></Grid>
    </template>
  </Layout>
</template>

<style>
  body, div {
    margin: 0;
    padding: 0;
  }
</style>
