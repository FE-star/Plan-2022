<style>
@import '../assets/bootstrap-grid.css';

.container-header {
    height: 24px;
    margin-bottom: 20px;
    margin-left: 6px;
}
.container-header .container-header-title {
    float: left;
    color: #111;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
}
</style>

<script>
// import Normal from './cards/normal.vue'

export default {
    props: {
        floor: Object
    },
    data(vm) {
        const data = vm.$props.floor.data
        return {
            hasData: !!data,
            data: data ? data : []
        }
    },
    components: {
        normal: Normal
    },
    computed: {
        classObject() {
            return {
                'card-container': true,
                'col2': this.floor.col === 2,
                'col3': this.floor.col === 3
            }
        }
    },
    mounted() {
        if (!this.hasData) {
            import('../utils/data')
                .then(module => {
                    this.data.push(...module.default.data.result)
                })
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <h3 class="container-header">
            <span class="container-header-title">{{floor.title}}</span>
        </h3>
        <div class="row">
            <div class="col" v-for="item in data">
                <component :data="item" :is="floor.card"></component>
            </div>
        </div>
    </div>
</template>