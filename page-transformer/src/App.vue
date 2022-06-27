<script>
  import Layout from './components/layout.vue'
  import Grid from './components/grid.vue'
  import FlexGrid from './components/flex-grid.vue'

  export default {
    props: {
        page: Array
    },
    components: {
      'grid': Grid,
      'flex-grid': FlexGrid,
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