<script>
  import Layout from './components/layout.vue'
  import Grid from './components/grid.vue'

  export default {
    props: {
        page: Array
    },
    components: {
      'grid': Grid,
      Layout
    },
  }
</script>

<template>
  <Layout>
    <template #default>
      <div v-for="floor in page">
        <component :floor="floor" :is="floor.type"></component>
      </div>
    </template>
  </Layout>
</template>

<style>
  body, div {
    margin: 0;
    padding: 0;
  }
</style>
