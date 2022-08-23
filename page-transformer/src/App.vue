<script>
import Layout from "./components/layout.vue";
import Grid from "./components/grid.vue";
import FlexGrid from "./components/flex-grid.vue";
import Normal from "./components/cards/normal.vue";

export default {
  props: {
    page: Array,
  },
  components: {
    grid: Grid,
    "flex-grid": FlexGrid,
    Layout,
    Normal,
  },
};
</script>

<template>
  <Layout>
    <template #default>
      <div v-for="(floor, floorIdx) in page" :key="floorIdx">
        <component :floor="floor" :is="floor.type" v-slot="{ dataItem }">
          <component :data="dataItem" :is="floor.card"></component>
        </component>
      </div>
    </template>
  </Layout>
</template>
