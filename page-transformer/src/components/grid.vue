<style>
.card-container {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
}

.card-container.col2 {
    width: 990px;
    padding: 0 22px;
}

.card-container.col2 .card-content {
    margin-left: -16px;
}

.card-container.col2 .card-item,
.card-container.col2 .skeleton-i {
    width: 465px;
    margin-left: 16px;
}

.card-container.col3 {
    width: 1190px;
    padding: 0 19px;
}

.card-container.col3 .card-content {
    margin-left: -18px;
}

.card-container.col3 .card-item,
.card-container.col3 .skeleton-i {
    width: 372px;
    margin-left: 18px;
}

.card-container * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.card-container-header {
    height: 24px;
    margin-bottom: 20px;
    margin-left: 6px;
}

.card-container-header .rh-title {
    float: left;
    color: #111;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
}

.card-container-header .rh-logo {
    height: 20px;
    margin: 4px 0 0 6px;
}

.clearfix {
    *zoom: 1;
}

.clearfix::after,
.clearfix::before {
    display: table;
    content: ' ';
}

.clearfix::after {
    clear: both;
    height: 0;
    line-height: 0;
    visibility: hidden;
}
</style>

<script>
import Normal from './cards/normal.vue'
// import jsonp from '../utils/jsonp'

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
    <div :class="classObject">
        <h3 class="card-container-header">
            <span class="rh-title">{{floor.title}}</span>
        </h3>
        <div class="card-content clearfix">
            <component :data="item" v-for="item in data" :is="floor.card"></component>
        </div>
    </div>
</template>