<script setup>
import { computed, unref } from 'vue';

const props = defineProps(['schema', 'result'])
const defines = computed(() => {
    const res = []
    if (props.schema) {
        for (let key in props.schema.props.list.inst) {
            res.push(Object.assign({
                key
            }, props.schema.props.list.inst[key]))
        }

        return res
    } else {
        return res
    }
})
</script>

<style scoped>
.table-container {
    margin-top: 20px;
}
.table-container table {
    border: 1px solid #333;
}
.table-container table th {
    border-left: 1px solid #333;
    width: 200px;
}
.table-container table th:first-child {
    border-left: 0;
}
.table-container table tr:nth-child(odd) {
    background-color: rgb(217, 187, 245);
}
.table-container table tr:first-child {
    background-color: #333;
    color: #fff;
}
</style>

<template>
    <div class="table-container">
        <table>
            <tr>
                <th v-for="define in defines">{{define.key}}</th>
            </tr>
            <tr v-for="item in props.result ? props.result.list : []">
                <th v-for="define in defines">{{item[define.key]}}</th>
            </tr>
        </table>
    </div>
</template>